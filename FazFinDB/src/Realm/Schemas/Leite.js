export const Fazendas = {
  name: "Farm",
  primaryKey: "_id",
  properties: {
      _id: "string",
      name: "string",
      owner: "string",
      createdAt: "date",
      contaleite: "LeiteSchema[]",
  },
};

export const LeiteSchema = {

  name: "LeiteSchema",
  primaryKey: "_id",
  properties: {
      _id: "string",
      precoL: "float",
      prodL: "float",
      description: "string",
      createdAt: "date",
  },
  assignee: {
      type: 'linkingObjects',
      objectType: 'Farm',
      property: 'contaleite'
  }
};