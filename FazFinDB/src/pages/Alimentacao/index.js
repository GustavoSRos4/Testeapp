import React, { useState,useContext} from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { CampoTexto } from "./styles";
import Header from "../../components/Header";
import { scale, verticalScale } from "react-native-size-matters";
import uuid from "react-native-uuid";
import writeGastos from "../../Realm/writeGastos";
import { AuthContext } from "../../contexts/auth";
function Alimentacao({ navigation }) {
  const [tipoAlim, setTipoAlim] = useState("");
  const [qtdAliS, setQtdAliS] = useState("");
  const [valorAliS, setValorAliS] = useState("");
  const [consumoAliS, setConsumoAliS] = useState("");
  const { rebID } = useContext(AuthContext);
  async function handleAddGastos() {
    const qtdAli = Number(qtdAliS)
    const valorAli = Number(valorAliS)
    const consumoAli = Number(consumoAliS)
    await writeGastos({
      _id: uuid.v4(),
      createdAt: new Date(),
      tipoAlim,
      qtdAli,
      valorAli,
      consumoAli,
    },rebID);navigation.navigate("PagelancaContas")
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TouchableOpacity style={styles.botaoPress2}>
        <Text style={styles.tituloBotao}>Qual o trato?</Text>
        <CampoTexto
          placeholder=""
          onChangeText={setTipoAlim}
          value={tipoAlim}
        ></CampoTexto>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoPress3}>
        <Text style={styles.tituloBotao}>{"Qual o peso da saca(KG)?"}</Text>
        <CampoTexto
          placeholder=""
          onChangeText={setQtdAliS}
          value={qtdAliS}
        ></CampoTexto>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoPress4}>
        <Text style={styles.tituloBotao}>{"Valor por saca(R$)?"}</Text>
        <CampoTexto
          placeholder=""
          onChangeText={setValorAliS}
          value={valorAliS}
        ></CampoTexto>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoPress5}>
        <Text style={styles.tituloBotao}>{"Quantidade consumida(KG)?"}</Text>
        <CampoTexto
          placeholder=""
          onChangeText={setConsumoAliS}
          value={consumoAliS}
        ></CampoTexto>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaopress6} onPress={handleAddGastos}>
        <Text style={styles.tituloBotao}>{"Cadastrar"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botaopress}
        onPress={() => navigation.navigate("PagelancaContas")}
      >
        <Text style={styles.tituloBotao}>{"Voltar"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00290C",
  },
  imgbg: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
  },
  botaoPress2: {
    borderRadius: 20,
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: scale(300),
    height: verticalScale(100),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    top: verticalScale(75),
    position: "absolute",
  },
  botaoPress3: {
    borderRadius: 20,
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: scale(300),
    height: verticalScale(100),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    top: verticalScale(200),
    position: "absolute",
  },
  botaoPress4: {
    borderRadius: 20,
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: scale(300),
    height: verticalScale(100),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    top: verticalScale(330),
    position: "absolute",
  },
  botaoPress5: {
    borderRadius: 20,
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: scale(300),
    height: verticalScale(100),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    top: verticalScale(460),
    position: "absolute",
  },
  tituloBotao2: {
    fontSize: scale(25),
    fontWeight: "bold",
    color: "#fff",
  },
  botaopress: {
    borderRadius: 20,
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: scale(300),
    height: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    top: verticalScale(625),
    position: "absolute",
  },
  
  botaopress6: {
    borderRadius: 20,
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: scale(300),
    height: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    top: verticalScale(575),
    position: "absolute",
  },
  tituloBotao: {
    fontSize: verticalScale(14),
    fontWeight: "bold",
    color: "#fff",
  },
});
export default Alimentacao;
