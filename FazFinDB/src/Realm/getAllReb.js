import { getRealm } from "./realm";
import { Alert } from "react-native";
import { AuthContext } from "../contexts/auth";
import { useContext } from "react";
async function getAllReb(fazID) {
  const realm = await getRealm();
  try {
    const data = realm.objects("Farm").filtered(`_id= '${fazID}'`);
    console.log(data[0].rebanhos)
    return data[0].rebanhos
  } catch (e) {
    Alert.alert("Error", e.message);
  }
}
export default getAllReb;