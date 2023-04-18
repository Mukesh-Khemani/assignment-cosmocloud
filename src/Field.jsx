import React, { useState } from "react";
import addNewField from "./addNewField";

const InputName = ({ givenName }) => {
  const [name, setName] = useState(givenName);
  const [showEdit, setShowEdit] = useState(false);

  return (
    <span>
      {showEdit === false ? (
        <span onClick={() => setShowEdit(true)}>{name}</span>
      ) : (
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setShowEdit(false)}
        />
      )}
    </span>
  );
};

const InputType = ({ type, setType }) => {
  return (
    <span>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        onBlur={() => setShowEdit(false)}
      >
        <option value="object">object</option>
        <option value="string">string</option>
        <option value="boolean">boolean</option>
        <option value="integer">integer</option>
        <option value="array">array</option>
      </select>
    </span>
  );
};

function Field({ field }) {
  const [type, setType] = useState(field.type);
  const [children, setChildren] = useState(field.children);

  const addFieldToChildren = () => {
    setChildren((old) => {
      let newChildren = [...old];
      newChildren.push(addNewField());
      return newChildren;
    });
  };

  return (
    <div style={{ paddingLeft: "15px" }}>
      <div>
        <InputName givenName={field.name} /> :{" "}
        <InputType type={type} setType={setType} />
        {type === "object" && (
          <span
            onClick={addFieldToChildren}
            className="material-symbols-outlined"
          >
            add
          </span>
        )}
      </div>

      {type === "object" && (
        <div>
          {children.map((item, index) => (
            <Field field={item} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Field;
