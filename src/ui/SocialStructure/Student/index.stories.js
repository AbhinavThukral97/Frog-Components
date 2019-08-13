import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Droppable } from "react-beautiful-dnd";

import { Student } from ".";
import { StudentList } from "../StudentList";
import { StorybookContainer } from "../../StorybookContainer";

const student = {
  id: "a1",
  name: "Abhinav",
  index: 0,
  color: "#FFCC66"
};

storiesOf("Social Structure/Student", module).add("Simple", () => (
  <StorybookContainer>
    <Droppable droppableId={"Testing"}>
      {provided => (
        <StudentList provided={provided} innerRef={provided.innerRef}>
          <Student
            userName={student.name}
            userId={student.id}
            index={student.index}
          />
          {provided.placeholder}
        </StudentList>
      )}
    </Droppable>
  </StorybookContainer>
));

storiesOf("Social Structure/Student", module).add("With Label", () => (
  <StorybookContainer>
    <Droppable droppableId={"Testing"}>
      {provided => (
        <StudentList provided={provided} innerRef={provided.innerRef}>
          <Student
            userName={student.name}
            userId={student.id}
            index={student.index}
            labelColor={student.color}
          />
          {provided.placeholder}
        </StudentList>
      )}
    </Droppable>
  </StorybookContainer>
));
