import { getRealm } from "./realm";
import { Alert } from "react-native";
import { AuthContext } from "../contexts/auth";
import { useContext } from "react";
async function getAllGastos() {
  const realm = await getRealm();
  try {
    const data = realm.objects("GastosSchema");
    return data;
  } catch (e) {
    Alert.alert("Error", e.message);
  }
}
export default getAllGastos;
