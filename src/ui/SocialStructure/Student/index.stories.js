import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Student } from ".";
import { StorybookContainer } from "../../StorybookContainer";

const name = "Abhinav";
const color = "#FFCC66";

storiesOf("Social Structure/Student", module).add("Simple", () => (
  <StorybookContainer>
    <Student userName={name} />
  </StorybookContainer>
));

storiesOf("Social Structure/Student", module).add("With Label", () => (
  <StorybookContainer>
    <Student userName={name} labelColor={color} />
  </StorybookContainer>
));
