import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import api from "../../../service/api";

import styles from "./style";

export default function Ceps() {

    const [cepList, setCepList] = useState([]);

    const getCeps = async () => {
        const result = await api.get('getCep.php', {
            params: {
                option: 'get ceps',
            },
        });
        console.log(result.data)
        setCepList(result.data);
    };

    useEffect(() => {
        getCeps();
    },[])

    return(
        <View style={styles.container}>
            <FlatList
                data={cepList}
                renderItem={({item}) => {
                    return(
                        <>
                        <View style={styles.box}>
                            <Text style={styles.title}>CEP</Text>
                            <Text>{item.cep}</Text>
                            <Text style={styles.title}>Logradouro</Text>
                            <Text>{item.logradouro}</Text>
                            <Text style={styles.title}>Bairro</Text>
                            <Text>{item.bairro}</Text>
                            <Text style={styles.title}>Cidade</Text>
                            <Text>{item.localidade}</Text>
                            <Text style={styles.title}>UF</Text>
                            <Text>{item.uf}</Text>
                        </View>
                        </>
                    )
                }}
                keyExtractor={(item) => {
                    item.idcep
                }}
            />
        </View>
    )
}
