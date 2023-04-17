import React, { useState } from "react";
import Field from "./Field";
import defaultState from "./defaultState";

function App() {
  const [fields, setFields] = useState(defaultState);

  return (
    <div className="App">
      {fields.map((item, index) => (
        <Field field={item} key={index} />
      ))}
    </div>
  );
}

export default App;
