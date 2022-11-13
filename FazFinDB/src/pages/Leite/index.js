import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Alert,
  FlatList,
  List,
} from "react-native";
import uuid from "react-native-uuid";
import Header from "../../components/Header";
import { getRealm } from "../../Realm/realm";
import writeLeite from "../../Realm/writeLeite";
import getAllLeite from "../../Realm/getAllLeite";
import deleteLeite from "../../Realm/deleteLeite";  
function Leite() {
  let data = Realm.Results;
  //Escrever no Banco
  async function handleAddLeite() {
    const precoL = Number(precoLV);
    const prodL = Number(prodLV);
    await writeLeite({
      _id: uuid.v4(),
      precoL,
      prodL,
      description,
      createdAt: new Date(),
    });
  }
  //delete
  async function handleDelete(){
    await deleteLeite()
  }

  //Buscar no banco
  async function getLeite() {
    const data = await getAllLeite();
    console.log(data);
    setListaFazenda(data);
  }
  useEffect(() => {
    getLeite();
  }, [ListaFazenda]);
  //Update no banco
  const updateLeite = async () => {
    const precoL = Number(precoLV);
    const prodL = Number(prodLV);
    const realm = await getRealm();
    const data = {
      _id: uuid.v4(),
      precoL,
      prodL,
      description,
      createdAt: new Date(),
    };
    realm.write(() => {
      realm.create("LeiteSchema", data, Realm.UpdateMode.Modified);
    });
  };
  //Background
  const imgbg1 = "../../../assets/bg10.jpg";
  //States para salvar o input
  const [description, setDescription] = useState("");
  const [precoLV, setPrecoLV] = useState("");
  const [prodLV, setProdLV] = useState("");
  const [ListaFazenda, setListaFazenda] = useState([]);
  //-----------------------------
  const renderItem = ({ item }) => {
    return <Text style={styles.lista2}>{item.description}</Text>;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Olá Carlos"} />
      
      <ScrollView style={styles.container3}>
        {/*Preco do leite*/}
        <View style={styles.containerinfos}>
          <Text style={styles.tituloinfo}>Preço atual do Leite:</Text>
          <TextInput
            style={styles.detalhe}
            value={precoLV}
            numeric
            keyboardType={"numeric"}
            onChangeText={setPrecoLV}
          />
        </View>
        {/*Produção diaria*/}
        <View style={styles.containerinfos}>
          <Text style={styles.tituloinfo}>Produção diaria:</Text>
          <TextInput
            style={styles.detalhe}
            value={prodLV}
            numeric
            keyboardType={"numeric"}
            onChangeText={setProdLV}
          />
          <TouchableOpacity style={styles.botaoselecionaranimal}>
            <Text style={styles.selecionaranimal}>Selecionar Animal</Text>
          </TouchableOpacity>
        </View>
        {/*Descrição*/}
        <View style={styles.containerinfos}>
          <Text style={styles.tituloinfo}>Descrição:</Text>
          <TextInput
            style={styles.detalhe}
            multiline={true}
            value={description}
            onChangeText={setDescription}
          />
        </View>

        <TouchableOpacity style={styles.botaovoltar} onPress={handleAddLeite}>
          <Text style={styles.textovoltar}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaovoltar2} onPress={getLeite}>
          <Text style={styles.textovoltar}>Buscar BD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaovoltar3} onPress={updateLeite}>
          <Text style={styles.textovoltar}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaovoltar3} onPress={handleDelete}>
          <Text style={styles.textovoltar}>Delete</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.container2}>
        <FlatList
          data={ListaFazenda}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#004513",
  },
  contvoltar: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    color: "rgba(15, 109, 0, 0.9)",
    top: 625,
  },
  botaovoltar: {
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: 300,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    marginVertical: 5,
    position: "relative",
    alignSelf: "center",
  },
  botaovoltar2: {
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: 300,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    marginVertical: 5,
    position: "relative",
    alignSelf: "center",
  },
  botaovoltar3: {
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: 300,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    marginVertical: 5,
    position: "relative",
    alignSelf: "center",
  },
  textovoltar: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  tituloinfo: {
    color: "#c4c4c4ff",
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  detalhe: {
    fontSize: 20,
    color: "black",
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 20,
  },
  containerinfos: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "rgba(15, 109, 0, 0.7)",
    borderRadius: 8,
  },
  botaoselecionaranimal: {
    backgroundColor: "#004513",
    width: 215,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 18,
    color: "white",
  },
  selecionaranimal: {
    color: "white",
    fontSize: 20,
  },
  container2: {
    flex: 1,
    height: 100,
    backgroundColor: "white",
  },
  lista2: {
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: 300,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    alignSelf: "center",
    marginVertical: 5,
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  container3: {
    height: 300,
   
  },
});

export default Leite;
