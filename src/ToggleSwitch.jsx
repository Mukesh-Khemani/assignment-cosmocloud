import React, { useState } from "react";
import ReactSwitch from "react-switch";

const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (val) => {
    setChecked(val);
  };

  return (
    <div className="text-xs flex flex-row items-center">
      <span className="font-semibold">Required</span>
      <ReactSwitch
        className="ml-1"
        onColor="#3d03fc"
        offColor="#807f82"
        checkedIcon={false}
        uncheckedIcon={false}
        width={25}
        height={14}
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
};

export default ToggleSwitch;
