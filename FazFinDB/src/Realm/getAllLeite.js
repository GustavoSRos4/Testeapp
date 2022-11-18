import { getRealm } from "./realm";
import { Alert } from "react-native";

async function getAllLeite() {
  const realm = await getRealm();
  try {
    return realm.objects("LeiteSchema").sorted("createdAt");
  } catch (e) {
    Alert.alert("Error", e.message);
  }realm.close();
}
export default getAllLeite;
