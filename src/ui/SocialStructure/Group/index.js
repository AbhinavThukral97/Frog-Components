import * as React from "react";
import { makeStyles, Badge, Typography } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";

import { Student } from "../Student";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "150px",
    border: `1px solid ${blueGrey[50]}`,
    background: "#FFF",
    margin: theme.spacing(1)
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
  badge: {
    transform: "translate(-50%,0)"
  }
}));

type GroupProps = {
  groupId: string,
  studentList: Array<>,
  studentsKey: object
};

export const Group = (props: GroupProps) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="overline" className={classes.text}>{`Group ${
          props.groupId
        }`}</Typography>
        <Badge
          badgeContent={props.studentList.length}
          color="primary"
          className={classes.badge}
        />
      </div>
      {props.studentList.map((student, index) => (
        <Student userName={props.studentsKey[student]} />
      ))}
    </div>
  );
};
