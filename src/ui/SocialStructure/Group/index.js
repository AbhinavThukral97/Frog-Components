import * as React from "react";
import { makeStyles, Badge, Typography } from "@material-ui/core";
import { amber, blueGrey } from "@material-ui/core/colors";
import { useDrop } from "react-dnd";

import { Student } from "../Student";

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
  groupHover: {
    boxShadow: `0 0 0 0.2rem ${amber[100]}`
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

const moveStudent = (group, student) => {
  console.log(`StudentId: '${student}' moved to Group '${group}'`);
};

export const Group = (props: GroupProps) => {
  const classes = useStyle();

  const [{ isOver, item }, drop] = useDrop({
    accept: "student",
    drop: () => moveStudent(props.groupId, item.studentId),
    collect: mon => ({
      isOver: !!mon.isOver(),
      item: mon.getItem()
    })
  });

  return (
    <div
      className={`${classes.root} ${isOver ? classes.groupHover : ""}`}
      ref={drop}
    >
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
      {props.studentList.length > 0 ? (
        props.studentList.map((student, index) => (
          <Student
            userName={props.studentsKey[student]}
            userId={student}
            key={student}
          />
        ))
      ) : (
        <Typography className={classes.message}>No Students</Typography>
      )}
    </div>
  );
};
