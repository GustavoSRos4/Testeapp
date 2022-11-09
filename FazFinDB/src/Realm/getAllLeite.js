import { getRealm } from "./realm";
import { Alert } from "react-native";

async function getAllLeite() {
  const realm = await getRealm();
  try {
    Alert.alert("Dados recuperados com sucesso!");
    return realm.objects("LeiteSchema").sorted("createdAt");
  } catch (e) {
    Alert.alert("Error", e.message);
  }
}
export default getAllLeite;
