import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [cep, setCep] = useState(null)
  const [logradouro, setLogradouro] = useState(null)
  const [bairro, setBairro] = useState(null)
  const [localidade, setLocalidade] = useState(null)
  const [uf, setUF] = useState(null)
  const {dataCep, setDataCep} = useState([]);

  async function getCep() {
    let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let body = await response.json();

    setLogradouro(body.logradouro);
    setBairro(body.bairro);
    setLocalidade(body.localidade);
    setUF(body.uf);
    console.log(body);
  }

  async function registerCep() {
    console.log(dataCep);
    // const result = await axios.post("http://localhost:8888/web/apiCep/api.php", {
    //   ...body,
    //   option: "register cep"
    // });
    // console.log(result)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BUSCAR CEP</Text>
      <View style={styles.viewInput}>
        <Text>CEP</Text>
        <TextInput
          style={styles.input}
          keyboardType='number'
          placeholder='90480-180'
          onChangeText={(number) => setCep(number)}
          value={cep}
        />
      </View>
      <View style={styles.viewInput}>
        <Text>Logradouro</Text>
        <TextInput
          style={styles.input}
          value={logradouro}
        />
      </View>
      <View style={styles.viewInput}>
        <Text>Bairro</Text>
        <TextInput
          style={styles.input}
          value={bairro}
        />
      </View>
      <View style={styles.viewInput}>
        <Text>Cidade</Text>
        <TextInput
          style={styles.input}
          value={localidade}
        />
      </View>
        <TouchableOpacity
          style={styles.button}
          onPress={getCep}
        >
          <Text style={styles.textButton}>Buscar CEP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonCadastra}
          onPress={registerCep}
        >
          <Text style={styles.textButtonCadastra}>Cadastra CEP</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewInput: {
    width: "70%",
  },
  input: {
    backgroundColor: "#e6f2ff",
    width: "100%",
    height: 50,
    marginBottom: 10,
    borderRadius: 10,
    paddingLeft: 10,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "lightgreen",
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 20,
  },
  textButton: {
    fontWeight: "bold",
  },
  buttonCadastra: {
    backgroundColor: "lightblue",
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 20,
  },
  textButtonCadastra: {
    fontWeight: "bold",
  }
});
