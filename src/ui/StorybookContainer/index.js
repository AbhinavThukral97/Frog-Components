import * as React from "react";
import { makeStyles } from "@material-ui/core";
import { DragDropContext } from "react-beautiful-dnd";

const useStyle = makeStyles(theme => ({
  root: {
    width: "150px",
    margin: "10px"
  }
}));

type StorybookContainerProps = {
  width?: number,
  children: React.Element<*> | React.Element<*>[]
};

export const StorybookContainer = (props: StorybookContainerProps) => {
  const classes = useStyle();

  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className={classes.root} style={{ width: props.width }}>
        {props.children}
      </div>
    </DragDropContext>
  );
};
