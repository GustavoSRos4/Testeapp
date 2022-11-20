import { getRealm } from "./realm";
import { Alert } from "react-native";

async function getAllVacas() {
  const realm = await getRealm();
  try {
    return realm.objects("VacasSchema").sorted("createdAt");
  } catch (e) {
    Alert.alert("Error", e.message);
  } realm.close();
}
export default getAllVacas;
