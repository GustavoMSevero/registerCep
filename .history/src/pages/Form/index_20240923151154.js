import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import api from "../../../service/api"

import styles from './style';

export default function Form({ navigation }) {

  const [cep, setCep] = useState(null)
  const [logradouro, setLogradouro] = useState(null)
  const [bairro, setBairro] = useState(null)
  const [localidade, setLocalidade] = useState(null)
  const [uf, setUF] = useState(null)

  async function getCep() {
    let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let body = await response.json();
    
    setLogradouro(body.logradouro);
    setBairro(body.bairro);
    setLocalidade(body.localidade);
    setUF(body.uf);
  }

  async function registerCep() {
    const cepData = {
      cep: cep,
      logradouro: logradouro,
      bairro: bairro,
      localidade: localidade,
      uf: uf,
    };

    const result = await api.post('/api.php', {
      ...cepData,
      option: 'register cep',
    })
    .then(result => {
      // console.log(result.data);
      if(result.data.status == 1) {
        alert(result.data.msg)
      } else if(result.data.status == 2) {
        alert(result.data.msg)
      }
      setLogradouro(null);
      setBairro(null);
      setLocalidade(null);
      setUF(null);
    })
    .catch(error => {
      // Handle error
      console.error(error);
    });

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
          readOnly
          style={styles.input}
          value={logradouro}
        />
      </View>
      <View style={styles.viewInput}>
        <Text>Bairro</Text>
        <TextInput
          readOnly
          style={styles.input}
          value={bairro}
        />
      </View>
      <View style={styles.viewInput}>
        <Text>Cidade</Text>
        <TextInput
          readOnly
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
          <Text style={styles.textButtonCadastra}>Cadastrar CEP</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.buttonListagem}
        >
          <Text style={styles.textButtonListagem}>Listagem de CEPs</Text>
        </TouchableOpacity> */}
        <Button 
          title='Listagem CEPs' 
          onPress={() => navigation.navigation("Ceps")} 
        />
      <StatusBar style="auto" />
    </View>
  );
}
