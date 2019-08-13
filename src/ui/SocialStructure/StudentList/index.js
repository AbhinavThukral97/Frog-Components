import * as React from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  }
}));

type StudentListProps = {
  children: React.Element<*> | React.Element<*>[]
};

export const StudentList = (props: StudentListProps) => {
  const classes = useStyle();

  return (
    <div
      className={classes.root}
      {...props.provided.droppableProps}
      ref={props.innerRef}
    >
      {props.children}
    </div>
  );
};
