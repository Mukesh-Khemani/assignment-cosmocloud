import React, { useState } from "react";
import addNewField from "./addNewField";
import ToggleSwitch from "./ToggleSwitch";
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
        className="bg-slate-100"
      >
        <option value="object">object</option>
        <option value="string">string</option>
        <option value="boolean">boolean</option>
        <option value="integer">integer</option>
      </select>
    </span>
  );
};

function Field({ field, deleteChild, sno }) {
  const [type, setType] = useState(field.type);
  const [children, setChildren] = useState(field.children);
  const [showBtns, setShowBtns] = useState(false);

  const addFieldToChildren = () => {
    setChildren((old) => {
      let newChildren = [...old];
      newChildren.push(addNewField());
      return newChildren;
    });
  };

  const deleteChildOfField = (id) => {
    setChildren((old) => {
      let newChildren = old.filter((item) => item.id !== id);
      return newChildren;
    });
  };

  return (
    <div className={sno ? "pl-2" : "pl-8"}>
      <div
        className="hover:bg-slate-200 flex flex-row"
        onMouseOver={() => setShowBtns(true)}
        onMouseOut={() => setShowBtns(false)}
      >
        <div className="flex-1">
          {sno && <span className="text-sm text-slate-300 mr-1">{sno}. </span>}
          <InputName givenName={field.name} /> :{" "}
          <InputType type={type} setType={setType} />
        </div>

        {showBtns && (
          <div className="flex-1 flex flex-row justify-end pr-2">
            <ToggleSwitch />
            {type === "object" && (
              <span
                onClick={addFieldToChildren}
                className="material-symbols-outlined cursor-pointer pl-2 text-xl"
              >
                add
              </span>
            )}
            <span
              className="material-symbols-outlined cursor-pointer pl-2 text-xl"
              onClick={() => deleteChild(field.id)}
            >
              delete
            </span>
          </div>
        )}
      </div>

      <hr />

      {type === "object" && (
        <div className={sno ? "" : "border-l"}>
          {children.map((item) => (
            <Field
              field={item}
              key={item.id}
              deleteChild={deleteChildOfField}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Field;
