import { getRealm } from "./realm";
import { Alert } from "react-native";
async function getAllGastos() {
  const realm = await getRealm();
  try {
    const data = realm.objects("RebanhoSchema");
    return data.gastos;
  } catch (e) {
    Alert.alert("Error", e.message);
  }
}
export default getAllGastos;
