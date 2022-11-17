import { getRealm } from "./realm";
import { Alert } from "react-native";
async function getAllGastos(rebID) {
  const realm = await getRealm();
  try {
    const data = realm.objects("RebanhoSchema").filtered(`_id= '${rebID}'`);
    return data[0].gastos;
  } catch (e) {
    Alert.alert("Error", e.message);
  }
}
export default getAllGastos;
