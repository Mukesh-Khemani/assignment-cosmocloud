const defaultState = [
  {
    type: "object",
    name: "person",
    children: [
      {
        type: "string",
        name: "firstname",
        children: [],
        id: 4,
      },
      {
        type: "string",
        name: "lastname",
        children: [],
        id: 3,
      },
      {
        type: "object",
        name: "cars",
        children: [
          {
            type: "string",
            name: "ferrari",
            children: [],
            id: 3,
          },
          {
            type: "string",
            name: "audi",
            children: [],
            id: 3,
          },
        ],
        id: 3,
      },
    ],
    id: 0,
  },
  {
    type: "boolean",
    name: "class",
    children: [],
    id: 1,
  },
  {
    type: "string",
    name: "order",
    children: [],
    id: 2,
  },
];

export default defaultState;
