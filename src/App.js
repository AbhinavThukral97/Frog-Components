import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SocialStructure } from "./ui/SocialStructure";

function App() {
  return (
    <div className="App">
      <SocialStructure
        socialStructure={{ groups: { "1": ["a1", "a2"] } }}
        groupingKey="groups"
        students={{ a1: "Creatively Named Student", a2: "Student 2" }}
      />
    </div>
  );
}

export default App;
