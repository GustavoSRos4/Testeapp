import { getRealm } from "./realm";
import { Alert } from "react-native";

let createdLeite;
const writeLeite = async (data) => {
  const realm = await getRealm();
  try {
    realm.write(() => {
      createdLeite = realm.create("LeiteSchema", data);
    });
    Alert.alert("Dados cadastrados com sucesso!");
    return createdLeite;
  } catch (e) {
    Alert.alert("Erro", e.message);
  }
};
export default writeLeite;
