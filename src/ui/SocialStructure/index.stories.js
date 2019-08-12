import * as React from "react";
import { storiesOf } from "@storybook/react";

import { SocialStructure } from ".";

const students = { aa1: "Stian", aa2: "Peter", aa3: "John", aa4: "Abhinav" };
const groupingKey = "groups";
const structure = { groups: { "1": ["aa1"], "2": ["aa2", "aa3"] } };

storiesOf("Social Structure", module).add("Simple", () => (
  <SocialStructure
    socialStructure={structure}
    groupingKey={groupingKey}
    students={students}
  />
));
