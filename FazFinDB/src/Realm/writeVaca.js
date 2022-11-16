import { getRealm } from "./realm";
import { Alert } from "react-native";
let createdvaca;
const writeVaca = async (data) => {
  const idrebanho = "f1d449e2-507a-423e-95bd-a74ebdab9611"

  const newdata = {
    _id: idrebanho,
    vacas: data,
  }
  const realm = await getRealm();
  try {
    realm.write(() => {
      createdvaca = realm.create("RebanhoSchema", newdata, "modified");
    });
    console.log(createdvaca.vacas.length)
    return createdvaca;
  } catch (e) {
    Alert.alert("Erro", e.message);
  }
};
export default writeVaca;
