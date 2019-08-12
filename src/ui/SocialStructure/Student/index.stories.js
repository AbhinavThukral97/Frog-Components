import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Student } from ".";

const name = "Abhinav";
const color = "#FFCC66";
const storybookParent = {
  width: "150px",
  margin: "10px"
};

storiesOf("Social Structure/Student", module).add("Simple", () => (
  <div style={storybookParent}>
    <Student userName={name} labelColor={color} />
  </div>
));
