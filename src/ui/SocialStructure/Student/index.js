import * as React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";
import { useDrag } from "react-dnd";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottom: `1px solid ${blueGrey[50]}`,

    "&:last-child": {
      borderBottom: "0px"
    }
  },
  draggable: {
    cursor: "grab",
    transition: ".25s ease",
    userSelect: "none",

    "&:active": {
      background: blueGrey[50]
    }
  },
  text: {
    fontSize: "12px",
    color: blueGrey[700],
    padding: theme.spacing(1, 1.5),
    textAlign: "left"
  },
  label: {
    height: theme.spacing(1),
    width: theme.spacing(1),
    borderRadius: "100%",
    margin: theme.spacing(1, 2)
  }
}));

type StudentProps = {
  userId: string,
  userName: string,
  labelColor?: string
};

export const Student = (props: StudentProps) => {
  const classes = useStyle();

  const [{ isDragging }, drag] = useDrag({
    item: { studentId: props.userId, type: "student" },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <div className={`${classes.root} ${classes.draggable}`} ref={drag}>
      <Typography className={classes.text}>{props.userName}</Typography>
      <div
        className={classes.label}
        style={{ background: props.labelColor ? props.labelColor : "none" }}
      />
    </div>
  );
};
