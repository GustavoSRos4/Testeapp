import { getRealm } from "./realm";
import { Alert } from "react-native";
let createdGastos;
const writeGastos = async (data) => {
  const realm = await getRealm();
  try {
    realm.write(() => {
      createdGastos = realm.create("GastosSchema", data);
    });
    Alert.alert("Dados cadastrados com sucesso!");
    return createdGastos;
  } catch (e) {
    Alert.alert("Erro", e.message);
  }
};
export default writeGastos;
