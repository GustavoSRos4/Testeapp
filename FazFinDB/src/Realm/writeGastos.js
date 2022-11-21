import { getRealm } from "./realm";
import { Alert } from "react-native";
let createdGastos;
const writeGastos = async (data, rebID) => {
  const realm = await getRealm();
  try {
    realm.write(() => {
      const reb = realm.objects("RebanhoSchema").filtered(`_id= '${rebID}'`);
      createdGastos = realm.create("GastosSchema", data);
      reb[0].gastos.push(createdGastos);
    });
    Alert.alert("Dados cadastrados com sucesso!");
    return createdGastos;
  } catch (e) {
    Alert.alert("Erro", e.message);
  } realm.close();
};
export default writeGastos;
