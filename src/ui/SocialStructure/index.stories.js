import * as React from "react";
import { storiesOf } from "@storybook/react";

import { SocialStructure } from ".";

const students = {
  aa1: "Robin",
  aa2: "Ethan",
  aa3: "Arial",
  aa4: "Cody",
  aa5: "Ted",
  aa6: "John",
  aa7: "Stacy"
};
const groupingKey = "groups";
const allStructure = {
  groups: {
    "1": ["aa1", "aa4"],
    "2": ["aa2", "aa3"],
    "3": ["aa5", "aa6", "aa7"]
  }
};
const someStructure = {
  groups: { "1": ["aa1"], "2": ["aa2", "aa3"], "3": ["aa5", "aa7"] }
};
const noStructure = { groups: {} };

storiesOf("Social Structure", module).add("All Students Grouped", () => (
  <SocialStructure
    socialStructure={allStructure}
    groupingKey={groupingKey}
    students={students}
  />
));

storiesOf("Social Structure", module).add("Some Students Grouped", () => (
  <SocialStructure
    socialStructure={someStructure}
    groupingKey={groupingKey}
    students={students}
  />
));

storiesOf("Social Structure", module).add("No Students Grouped", () => (
  <SocialStructure
    socialStructure={noStructure}
    groupingKey={groupingKey}
    students={students}
  />
));
