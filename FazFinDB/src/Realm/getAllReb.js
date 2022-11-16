import { getRealm } from "./realm";
import { Alert } from "react-native";
import { AuthContext } from "../contexts/auth";
import { useContext } from "react";
async function getAllReb() {
  const realm = await getRealm();
  try {
    const fazid = "ac8fdcaf-4a60-4f1d-88aa-041510d85107";
    const data = realm.objectForPrimaryKey("Farm", fazid).rebanhos
    console.log(data);
    return data;
  } catch (e) {
    Alert.alert("Error", e.message);
  }
}
export default getAllReb;
