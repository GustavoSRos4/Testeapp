import { getRealm } from "./realm";
import { Alert } from "react-native";
import { AuthContext } from "../contexts/auth";
import { useContext } from "react";
function getFazID() {
  const { fazID } = useContext(AuthContext);
  const idfaz = fazID.Fazid;
  console.log(idfaz);
  return idfaz;
}
async function getAllReb() {
  const realm = await getRealm();
  const idfaz = getFazID();
  try {
    return realm.objects("Farm").filtered(`_id = '${idfaz}'`)[0].rebanhos;
  } catch (e) {
    Alert.alert("Error", e.message);
  }
}
export default getAllReb;
