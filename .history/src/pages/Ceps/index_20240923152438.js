import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Ceps() {
    return(
        <View style={styles.container}>
            <View>
                <Text>CEPs</Text>
            </View>
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
        alignItems: 'center',
        justifyContent: 'center',
      },
})