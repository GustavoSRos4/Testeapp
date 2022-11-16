import { getRealm } from "./realm";
import { Alert } from "react-native";
import { AuthContext } from "../contexts/auth";
import { useContext } from "react";
async function getAllReb() {
  const realm = await getRealm();
  try {
    const fazid = "536dbf9f-2f15-456a-ac82-3437eb0b984a";
    const data = realm.objects("Farm");
    console.log(data);
    return data;
  } catch (e) {
    Alert.alert("Error", e.message);
  }
}
export default getAllReb;
