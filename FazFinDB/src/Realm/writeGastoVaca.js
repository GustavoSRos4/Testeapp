import { getRealm } from "./realm";
import { Alert } from "react-native";

const writeGastoVaca = async (gastosVaca, rebID) => {
  const realm = await getRealm();
  console.log(typeof gastosVaca);
  try {
    realm.write(() => {
      const rebanho = realm
        .objects("RebanhoSchema")
        .filtered(`_id= '${rebID}'`);
      for (var i in rebanho[0].vacas) {
        rebanho[0].vacas[i].gastosV = rebanho[0].vacas[i].gastosV + gastosVaca;
      }
    });

    Alert.alert("Dados cadastrados com sucesso!");
  } catch (e) {
    Alert.alert("Erro", e.message);
  }
  realm.close();
};
export default writeGastoVaca;
