const defaultState = [
  {
    type: "object",
    name: "person",
    children: [
      {
        type: "string",
        name: "firstname",
        children: [],
        id: 3,
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
            type: "object",
            name: "audi",
            children: [{
                type: "string",
                name: "R8",
                children: [],
                id: 3,
            }
            ],
            id: 4,
          },
        ],
        id: 4,
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
    id: 3,
  },
  {
    type: "integer",
    name: "order",
    children: [],
    id: 2,
  },
];

export default defaultState;
