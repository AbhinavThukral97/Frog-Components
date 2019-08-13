import * as React from "react";
import { makeStyles } from "@material-ui/core";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

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
    <DndProvider backend={HTML5Backend}>
      <div className={classes.root} style={{ width: props.width }}>
        {props.children}
      </div>
    </DndProvider>
  );
};
