import { LeiteSchema,Fazendas } from "../../src/Realm/Schemas/Leite";
import Realm from "realm";

export const getRealm = async () =>
  await Realm.open({
    path: "fazfin-app",
    schema: [LeiteSchema, Fazendas],
    schemaVersion: 3,
  });
