import * as React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";
import { Draggable } from "react-beautiful-dnd";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: `100%`,
    padding: theme.spacing(1, 1.5),
    borderBottom: `1px solid ${blueGrey[50]}`,
    cursor: "grab",
    transition: ".25s ease",
    userSelect: "none",

    "&:last-child": {
      borderBottom: "0px"
    },

    "&:active": {
      background: blueGrey[100],
      transform: "scale(1.1)",
      borderBottom: "0px",
      boxShadow: `0 5px 25px rgba(0,0,0,.1)`
    }
  },
  text: {
    fontSize: "12px",
    color: blueGrey[900],
    textAlign: "left"
  },
  label: {
    height: theme.spacing(1),
    width: theme.spacing(1),
    borderRadius: "100%"
  }
}));

type StudentProps = {
  userId: string,
  userName: string,
  index?: number,
  labelColor?: string
};

export const Student = (props: StudentProps) => {
  const classes = useStyle();
  return (
    <Draggable draggableId={props.userId} index={props.index}>
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={classes.root}
        >
          <Typography className={classes.text}>{props.userName}</Typography>
          <div
            className={classes.label}
            style={{
              background: props.labelColor ? props.labelColor : "none"
            }}
          />
        </div>
      )}
    </Draggable>
  );
};
