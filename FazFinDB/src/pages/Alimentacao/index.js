import React, { useState, useContext } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  View,
} from "react-native";
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
    const qtdAli = Number(qtdAliS);
    const valorAli = Number(valorAliS);
    const consumoAli = Number(consumoAliS);
    await writeGastos(
      {
        _id: uuid.v4(),
        createdAt: new Date(),
        tipoAlim,
        qtdAli,
        valorAli,
        consumoAli,
      },
      rebID
    );
    navigation.navigate("PagelancaContas");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.containerinput}>
        <Text style={styles.tituloBotao3}>Qual o trato?</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          onChangeText={setTipoAlim}
          value={tipoAlim}
        ></TextInput>

        <Text style={styles.tituloBotao3}>{"Qual o peso da saca(KG)?"}</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          onChangeText={setQtdAliS}
          value={qtdAliS}
        ></TextInput>

        <Text style={styles.tituloBotao3}>{"Valor por saca(R$)?"}</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          onChangeText={setValorAliS}
          value={valorAliS}
        ></TextInput>

        <Text style={styles.tituloBotao3}>{"Quantidade consumida(KG)?"}</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          onChangeText={setConsumoAliS}
          value={consumoAliS}
        ></TextInput>
      </View>
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
  containerinput: {
    backgroundColor: "rgba(15, 109, 0, 1)",
    margin: verticalScale(10),
    alignItems: "center",
    width: scale(300),
    alignSelf: "center",
    height: verticalScale(500),
    justifyContent: "center",
    borderRadius: verticalScale(20),
  },
  input: {
    backgroundColor: "white",
    color: "black",
    width: scale(250),
    height: verticalScale(40),
    alignSelf: "center",
    borderRadius: 20,
    textAlign: "center",
    marginBottom: verticalScale(30),
  },
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
  tituloBotao3: {
    fontSize: verticalScale(20),
    fontWeight: "bold",
    color: "#fff",
  },
});
export default Alimentacao;
