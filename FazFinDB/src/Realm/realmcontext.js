import { createRealmContext } from "@realm/react";
import { LeiteSchema } from "../../src/Realm/Schemas/Leite";
export const { useRealm, useQuery, RealmProvider } = createRealmContext({
  schema: [LeiteSchema],
  deleteRealmIfMigrationNeeded: true,
});
