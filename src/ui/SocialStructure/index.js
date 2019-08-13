import * as React from "react";
import { makeStyles } from "@material-ui/core";
import { DragDropContext } from "react-beautiful-dnd";

import { Group } from "./Group";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flext-start",
    alignItems: "flex-start",
    width: "90%",
    margin: theme.spacing(1)
  },
  button: {
    display: "flex",
    alignSelf: "flex-start",
    margin: theme.spacing(1)
  }
}));

type SocialStructureProps = {
  students: object,
  groupingKey: string,
  socialStructure: {
    groups: object
  },
  onChange: (
    studentId: string,
    groupingKey: string,
    groupingValue: string
  ) => void
};

const ungroupedStudents = (studentList, groups) => {
  let allStudents = Object.keys(studentList);
  let grouped = [];
  Object.keys(groups).forEach(key => {
    groups[key].forEach(studentId => {
      grouped.push(studentId);
    });
  });
  let ungrouped = allStudents.filter(x => !grouped.includes(x));
  return ungrouped;
};

export const SocialStructure = (props: SocialStructureProps) => {
  const classes = useStyle();

  const onDragEnd = result => {
    let destination = result.destination.droppableId;
    let source = result.source.droppableId;
    let student = result.draggableId;
    console.log(
      `${student} was moved from group ${source} to group ${destination}`
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={classes.root}>
        <Group
          key="Ungrouped"
          groupId="Ungrouped"
          studentList={ungroupedStudents(
            props.students,
            props.socialStructure.groups
          )}
          studentsKey={props.students}
          variant="list"
        />
        {Object.keys(props.socialStructure[props.groupingKey]).map(
          (groupKey, index) => (
            <Group
              key={groupKey}
              groupId={groupKey}
              studentList={props.socialStructure[props.groupingKey][groupKey]}
              studentsKey={props.students}
            />
          )
        )}
      </div>
    </DragDropContext>
  );
};
