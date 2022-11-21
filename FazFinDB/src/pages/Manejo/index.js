import {
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import Header from "../../components/Header";
import React, { useState, useContext } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import writeGastos from "../../Realm/writeGastos";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import Modal from "react-native-modal";
import uuid from "react-native-uuid";
import { AuthContext } from "../../contexts/auth";
function Manejo({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [isModalVisible3, setModalVisible3] = useState(false);
  const [valorAliS, setValorAliS] = useState("");
  const [qtdAliS, SetQtdAliS] = useState("");
  const [consumoAliS, SetConsumoAliS] = useState("");
  const [tipoAlim, setTipoAlim] = useState("");
  const { rebID } = useContext(AuthContext);
  async function handleAddGastos() {
    if (qtdAliS == "" || consumoAliS == "") {
      const valorAli = Number(valorAliS);
      await writeGastos(
        {
          _id: uuid.v4(),
          createdAt: new Date(),
          tipoAlim,
          qtdAli : 1,
          valorAli,
          consumoAli: 1,
        },
        rebID
      );
      navigation.navigate("PagelancaContas");
    } else {
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
  }
  function toggleModal() {
    setModalVisible(!isModalVisible);
  }
  function toggleModal2() {
    setModalVisible2(!isModalVisible2);
  }
  function toggleModal3() {
    setModalVisible3(!isModalVisible3);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TouchableOpacity
        style={styles.containerinfos}
        onPress={() => {
          toggleModal(true);
        }}
      >
        <Text style={styles.tituloBotao2}>
          
          {"  Vacina e remédios"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerinfos}
        onPress={() => {
          toggleModal2(true);
        }}
      >
        <Text style={styles.tituloBotao2}>
          
          {"  Mão de obra"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerinfos}
        onPress={() => {
          toggleModal3(true);
        }}
      >
        <Text style={styles.tituloBotao2}>
          
          {"  Outros"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botaopress}
        onPress={() => navigation.navigate("PagelancaContas")}
      >
        <Text style={styles.tituloBotao}>{"Voltar"}</Text>
      </TouchableOpacity>
      <Modal
        statusBarTranslucent
        isVisible={isModalVisible}
        coverScreen={true}
        backdropColor={"rgba(234,242,215,0.8)"}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <View style={styles.modalContainer}>
          <Text style={styles.tituloModal}>Cadastro de Vacina e Remédios</Text>
          <Text style={styles.tituloBotao3}>{"Qual o remédio ou vacina?"}</Text>
          <TextInput
            style={styles.input}
            value={tipoAlim}
            onChangeText={setTipoAlim}
          />
          <Text style={styles.tituloBotao3}>{"Qual o valor do produto?"}</Text>
          <TextInput
            style={styles.input}
            value={valorAliS}
            numeric
            keyboardType={"numeric"}
            onChangeText={setValorAliS}
          />
          <Text style={styles.tituloBotao3}>{"Qual o volume do produto?"}</Text>
          <TextInput
            style={styles.input}
            value={qtdAliS}
            numeric
            keyboardType={"numeric"}
            onChangeText={SetQtdAliS}
          />
          <Text style={styles.tituloBotao3}>
            {"Qual a quantidade aplicada?"}
          </Text>
          <TextInput
            style={styles.input}
            value={consumoAliS}
            numeric
            keyboardType={"numeric"}
            onChangeText={SetConsumoAliS}
          />
        </View>
        <TouchableOpacity style={styles.botaopress6} onPress={handleAddGastos}>
          <Text style={styles.tituloBotao}>{"Cadastrar"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaopress}
          onPress={() => {
            toggleModal(false);
          }}
        >
          <Text style={styles.tituloBotao}>Voltar</Text>
        </TouchableOpacity>
      </Modal>
      <Modal
        statusBarTranslucent
        isVisible={isModalVisible2}
        coverScreen={true}
        backdropColor={"rgba(234,242,215,0.8)"}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <View style={styles.modalContainer2}>
          <Text style={styles.tituloModal}>Cadastro de mão de obra.</Text>
          <Text style={styles.tituloBotao3}>{"Descrição do serviço:"}</Text>
          <TextInput
            style={styles.input}
            value={tipoAlim}
            onChangeText={setTipoAlim}
          />
          <Text style={styles.tituloBotao3}>{"Total pago pelo serviço:"}</Text>
          <TextInput
            style={styles.input}
            value={valorAliS}
            numeric
            keyboardType={"numeric"}
            onChangeText={setValorAliS}
          />
        </View>
        <TouchableOpacity style={styles.botaopress6} onPress={handleAddGastos}>
          <Text style={styles.tituloBotao3}>{"Cadastrar"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaopress}
          onPress={() => {
            toggleModal2(false);
          }}
        >
          <Text style={styles.tituloBotao3}>Voltar</Text>
        </TouchableOpacity>
      </Modal>

      <Modal
        statusBarTranslucent
        isVisible={isModalVisible3}
        coverScreen={true}
        backdropColor={"rgba(234,242,215,0.8)"}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <View style={styles.modalContainer3}>
          <Text style={styles.tituloModal}>Cadastro de outras despesas.</Text>
          <Text style={styles.tituloBotao3}>{"Descrição:"}</Text>
          <TextInput
            style={styles.input}
            value={tipoAlim}
            onChangeText={setTipoAlim}
          />
          <Text style={styles.tituloBotao3}>{"Total pago:"}</Text>
          <TextInput
            style={styles.input}
            value={valorAliS}
            numeric
            keyboardType={"numeric"}
            onChangeText={setValorAliS}
          />
        </View>
        <TouchableOpacity style={styles.botaopress6} onPress={handleAddGastos}>
          <Text style={styles.tituloBotao}>{"Cadastrar"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaopress}
          onPress={() => {
            toggleModal3(false);
          }}
        >
          <Text style={styles.tituloBotao}>Voltar</Text>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  tituloModal: {
    fontSize: verticalScale(25),
    fontWeight: "bold",
    color: "white",
    margin: verticalScale(10),
    alignSelf: "center",
    top: verticalScale(0),
  },
  modalContainer: {
    backgroundColor: "rgba(15, 109, 0, 1)",
    position: "absolute",
    top: verticalScale(20),
    alignSelf: "center",
    width: scale(330),
    height: verticalScale(500),
    borderRadius: 20,
    justifyContent: "center",
  },
  modalContainer2: {
    backgroundColor: "rgba(15, 109, 0, 1)",
    position: "absolute",
    top: verticalScale(0),
    alignSelf: "center",
    width: scale(330),
    height: verticalScale(280),
    borderRadius: 20,
    justifyContent: "center",
  },
  modalContainer3: {
    backgroundColor: "rgba(15, 109, 0, 1)",
    position: "absolute",
    top: verticalScale(0),
    alignSelf: "center",
    width: scale(330),
    height: verticalScale(280),
    borderRadius: 20,
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    color: "black",
    width: scale(300),
    height: verticalScale(40),
    alignSelf: "center",
    borderRadius: 20,
    textAlign: "center",
    marginBottom: verticalScale(40),
  },
  container: {
    flex: 1,
    backgroundColor: "#004513",
  },
  imgbg: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
  },
  containerinfos: {
    marginVertical: verticalScale(15),
    padding: verticalScale(50),
    width: scale(320),
    backgroundColor: "rgba(15, 109, 0, 0.7)",
    borderRadius: 15,
    alignSelf: "center",
  },
  tituloBotao2: {
    fontSize: scale(25),
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
  },
  botaopress: {
    borderRadius: 20,
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: scale(300),
    height: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    top: verticalScale(605),
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
    top: verticalScale(555),
    position: "absolute",
  },
  tituloBotao: {
    fontSize: verticalScale(14),
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
  },
  tituloBotao3: {
    fontSize: verticalScale(20),
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
  },
});
export default Manejo;
