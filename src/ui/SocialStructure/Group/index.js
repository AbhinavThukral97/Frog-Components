import * as React from "react";
import { makeStyles, Badge, Typography } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";
import { Droppable } from "react-beautiful-dnd";

import { Student } from "../Student";
import { StudentList } from "../StudentList";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "160px",
    border: `1px solid ${blueGrey[50]}`,
    background: "#FFF",
    margin: theme.spacing(1),
    transition: ".25s ease"
  },
  header: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap"
  },
  text: {
    fontSize: "10px",
    color: blueGrey[300],
    margin: theme.spacing(0, 1)
  },
  message: {
    fontSize: "12px",
    color: blueGrey[300],
    margin: theme.spacing(1, 1)
  },
  badge: {
    transform: "translate(-50%,0)"
  }
}));

type GroupProps = {
  groupId: string,
  studentList?: Array<>,
  studentsKey: object,
  variant?: string
};

export const Group = (props: GroupProps) => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="overline" className={classes.text}>
          {props.variant === "list" ? "Student List" : `Group ${props.groupId}`}
        </Typography>
        <Badge
          badgeContent={props.studentList.length}
          color={props.variant === "list" ? "primary" : "secondary"}
          className={classes.badge}
        />
      </div>
      <Droppable droppableId={props.groupId}>
        {provided => (
          <StudentList provided={provided} innerRef={provided.innerRef}>
            {props.studentList.length > 0 ? (
              props.studentList.map((student, index) => (
                <Student
                  userName={props.studentsKey[student]}
                  userId={student}
                  key={student}
                  index={index}
                />
              ))
            ) : (
              <Typography className={classes.message}>No Students</Typography>
            )}
            {provided.placeholder}
          </StudentList>
        )}
      </Droppable>
    </div>
  );
};
