import * as React from "react";
import { makeStyles } from "@material-ui/core";

import { Group } from "./Group";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
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
  Object.keys(groups).forEach((key, index) => {
    groups[key].forEach((studentId, i) => {
      grouped.push(studentId);
    });
  });
  let ungrouped = [];
  ungrouped = allStudents.filter(x => !grouped.includes(x));
  return ungrouped;
};

export const SocialStructure = (props: SocialStructureProps) => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Group
        groupId={"Ungrouped"}
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
            groupId={groupKey}
            studentList={props.socialStructure[props.groupingKey][groupKey]}
            studentsKey={props.students}
          />
        )
      )}
    </div>
  );
};
