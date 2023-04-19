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
    <div className="py-5">
      <div className="grid gap-4 border-4 rounded-xl p-6 w-2/3 mx-auto bg-white">
        <div className="bg-slate-50 flex flex-col">
          <div className="flex flex-row justify-between items-center px-1">
            <span className="text-xs font-bold text-slate-500">
              Field name and type
            </span>
            <span
              onClick={addFieldToChildren}
              className="material-symbols-outlined cursor-pointer text-sm"
            >
              add
            </span>
          </div>
          <div className="border">
            {fields.map((item, index) => (
              <Field
                deleteChild={deleteChild}
                field={item}
                key={item.id}
                sno={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
