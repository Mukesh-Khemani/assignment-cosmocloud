import React, { useState } from "react";
import Field from "./Field";
import defaultState from "./defaultState";
import addNewField from "./addNewField";

function App() {
  const [fields, setFields] = useState(defaultState);

  const addFieldToChildren = () => {
    setFields((old) => {
      let newChildren = [...old];
      newChildren.push(addNewField());
      return newChildren;
    });
  };

  const deleteChild = (id) => {
    setFields((old) => {
      let newChildren = old.filter((item) => item.id !== id);
      return newChildren;
    });
  };

  return (
    <div className="App">
      <span onClick={addFieldToChildren} className="material-symbols-outlined">
        add
      </span>

      <div>
        {fields.map((item) => (
          <Field deleteChild={deleteChild} field={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
