import { getRealm } from "./realm";
import { Alert } from "react-native";

async function deleteLeite() {
  const realm = await getRealm();
  try {
    Alert.alert("Dados deletados com sucesso!");
    return realm.write(() => {
      realm.delete(realm.objects("LeiteSchema"));
    });
  } catch (e) {
    Alert.alert("Error", e.message);
  }
}
export default deleteLeite;
