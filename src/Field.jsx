import React, { useState } from "react";

function Field({ field }) {
  const [showContent, setShowContent] = useState(false);

  return (
    <div style={{ paddingLeft: "15px" }}>
      <div onClick={() => setShowContent(!showContent)}>
        <span>{field.name}</span> : <span>{field.type}</span>
      </div>

      {field.type === "object" && showContent && (
        <div>
          {field.children.map((item, index) => (
            <Field field={item} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Field;
