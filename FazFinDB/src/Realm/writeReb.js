import { getRealm } from "./realm";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { Alert } from "react-native";
let createdReb
const writeReb = async (data) => {
  const realm = await getRealm();
  try {
    realm.write(() => {
      createdReb = realm.create("Farm", data,"modified");
      console.log(data.rebanhos);
    });
    Alert.alert("Dados cadastrados com sucesso!");
    return createdReb;
  } catch (e) {
    Alert.alert("Erro", e.message);
  }
};
export default writeReb;