import * as React from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    width: "100%"
  }
}));

type ContainerProps = {
  children: React.Element<*> | React.Element<*>[]
};

export const Container = (props: ContainerProps) => {
  const classes = useStyle();

  return (
    <div
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
      ref={props.innerRef}
      className={classes.root}
    >
      {props.children}
    </div>
  );
};
