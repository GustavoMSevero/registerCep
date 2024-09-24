import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import api from "../../../service/api";

export default function Ceps() {

    const [cepList, setCepList] = useState([]);

    const getCeps = async () => {
        const result = await api.get('getCep.php', {
            params: {
                option: 'get ceps',
            },
        });
        console.log(result.data)
        // setCepList(result.data);
    };

    useEffect(() => {
        getCeps();
    },[])

    return(
        <View style={styles.container}>
            <View>
                <Text>CEP</Text>
                <Text>90480180</Text>
                <Text>Logradouro</Text>
                <Text>Rua Senador Annibal Di Primio Beck</Text>
                <Text>Bairro</Text>
                <Text>Boa Vista</Text>
                <Text>Cidade</Text>
                <Text>Porto Alegre</Text>
                <Text>UF</Text>
                <Text>RS</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
})