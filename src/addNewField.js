import ShortUniqueId from "short-unique-id";
const uid = new ShortUniqueId({ length: 10 });

const addNewField = () => {
  const newField = {
    type: "string",
    name: "addName",
    children: [],
    id: uid(),
  };

  return newField;
};


export default addNewField;