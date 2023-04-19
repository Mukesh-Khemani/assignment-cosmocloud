import ShortUniqueId from "short-unique-id";
const uid = new ShortUniqueId({ length: 10 });

const defaultState = [
  {
    type: "object",
    name: "person",
    children: [
      {
        type: "string",
        name: "firstname",
        children: [],
        id: uid(),
      },
      {
        type: "string",
        name: "lastname",
        children: [],
        id: uid(),
      },
      {
        type: "object",
        name: "cars",
        children: [
          {
            type: "string",
            name: "ferrari",
            children: [],
            id: uid(),
          },
          {
            type: "object",
            name: "audi",
            children: [{
                type: "string",
                name: "R8",
                children: [],
                id: uid(),
            }
            ],
            id: uid(),
          },
        ],
        id: uid(),
      },
    ],
    id: uid(),
  },
  {
    type: "boolean",
    name: "class",
    children: [],
    id: uid(),
  },
  {
    type: "string",
    name: "order",
    children: [],
    id: uid(),
  },
  {
    type: "integer",
    name: "phoneNumber",
    children: [],
    id: uid(),
  },
];

export default defaultState;
