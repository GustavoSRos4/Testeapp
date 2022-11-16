export const Fazenda = {
  name: "Farm",
  primaryKey: "_id",
  properties: {
    _id: "string",
    nomefaz: "string",
    proprietario: "string",
    tipoprod: "string",
    createdAt: "date",
    rebanhos: { type: "list", objectType: "RebanhoSchema" },
  },
};
export const RebanhoSchema = {
  name: "RebanhoSchema",
  embedded: true,
  properties: {
    _id: "string",
    nomeReb: "string",
    createdAt: "date",
    vacas: "VacasSchema[]",
    assignee: {
      type: "linkingObjects",
      objectType: "Farm",
      property: "rebanhos",
    },
  },
};
export const LeiteSchema = {
  name: "LeiteSchema",
  primaryKey: "_id",
  properties: {
    _id: "string",
    precoL: "float",
    prodL: "float",
    genero: "int",
    description: "string",
    createdAt: "date",
    assignee: {
      type: "linkingObjects",
      objectType: "VacasSchema",
      property: "receitas",
    },
  },
};
export const VacasSchema = {
  name: "VacasSchema",
  primaryKey: "_id",
  properties: {
    _id: "string",
    nomeVaca: "string",
    nascimentoVaca: "float",
    brincoVaca: "float",
    descVaca: "string",
    createdAt: "date",
    receitas: "LeiteSchema[]",
    gastos: "GastosSchema[]",
    assignee: {
      type: "linkingObjects",
      objectType: "RebanhoSchema",
      property: "vacas",
    },
  },
};
export const GastosSchema = {
  name: "GastosSchema",
  primaryKey: "_id",
  properties: {
    _id: "string",
    precoVac: "float?",
    qtdVac: "float?",
    qtdTotVac: "float?",
    descVac: "string?",
    createdAt: "date?",
    descricaoMO: "string?",
    servicoMO: "string?",
    gastoMO: "float?",
    tipoAlim: "string?",
    qtdAli: "float?",
    valorAli: "float?",
    consumoAli: "float?",
    assignee: {
      type: "linkingObjects",
      objectType: "VacasSchema",
      property: "gastos",
    },
  },
};
