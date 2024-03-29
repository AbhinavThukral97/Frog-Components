import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Group } from ".";
import { StorybookContainer } from "../../StorybookContainer";

const students = { aa1: "Stian", aa2: "Peter", aa3: "John" };

const group = {
  name: "1",
  students: ["aa1", "aa3"]
};

storiesOf("Social Structure/Group", module).add("Simple", () => (
  <StorybookContainer>
    <Group
      groupId={group.name}
      studentList={group.students}
      studentsKey={students}
    />
  </StorybookContainer>
));

storiesOf("Social Structure/Group", module).add("No Students", () => (
  <StorybookContainer>
    <Group groupId={group.name} studentList={[]} studentsKey={students} />
  </StorybookContainer>
));

storiesOf("Social Structure/Group", module).add("Student List Variant", () => (
  <StorybookContainer>
    <Group
      groupId={group.name}
      studentList={group.students}
      studentsKey={students}
      variant="list"
    />
  </StorybookContainer>
));
