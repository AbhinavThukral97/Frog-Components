import * as React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";

const dragHighlight = blueGrey[50];

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottom: `1px solid ${dragHighlight}`
  },
  draggable: {
    cursor: "pointer",
    transition: ".5s ease",
    userSelect: "none",

    "&:active": {
      background: dragHighlight,
      transform: "scale(1.05)",
      boxShadow: `0px 0px 10px ${dragHighlight}`
    }
  },
  text: {
    fontSize: "12px",
    padding: theme.spacing(1, 2)
  },
  label: {
    height: theme.spacing(1),
    width: theme.spacing(1),
    borderRadius: "100%",
    margin: theme.spacing(1, 2)
  }
}));

type StudentProps = {
  userName: string,
  labelColor?: string
};

export const Student = (props: StudentProps) => {
  const classes = useStyle();
  return (
    <div className={`${classes.root} ${classes.draggable}`}>
      <Typography className={classes.text}>{props.userName}</Typography>
      <div
        className={classes.label}
        style={{ background: props.labelColor ? props.labelColor : "none" }}
      />
    </div>
  );
};
