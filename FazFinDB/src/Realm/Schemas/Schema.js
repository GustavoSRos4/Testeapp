export const Fazenda = {
  name: "Farm",
  primaryKey: "_id",
  properties: {
    _id: "string",
    nomefaz: "string",
    proprietario: "string",
    tipoprod: "string",
    createdAt: "date",
    rebanhos: "RebanhoSchema[]",
  },
};
export const RebanhoSchema = {
  name: "RebanhoSchema",
  primaryKey: "_id",
  properties: {
    _id: "string",
    nomeReb: "string",
    createdAt: "date",
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
  },
};
export const GastosSchema = {
  name: "GastosSchema",
  primaryKey: "_id",
  properties: {
    _id: "string",
    precoVac: "float",
    qtdVac: "float",
    qtdTotVac: "float",
    descVac: "string",
    createdAt: "date",
    descricaoMO: "string",
    servicoMO: "string",
    gastoMO: "float",
    tipoAlim: "string",
    qtdAli: "float",
    valorAli: "float",
    consumoAli: "float",
  },
};
