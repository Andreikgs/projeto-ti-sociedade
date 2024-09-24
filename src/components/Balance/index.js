import { StyleSheet, Text, TextInput, TouchableOpacity, View, Platform} from "react-native";
import React, { useState } from "react";
import {FontAwesome5} from "@expo/vector-icons"



export default function Balance({ navigation }){
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    return(
        <View style={estilo.container}>
            <FontAwesome5 name="users" size={26} color="#000" style={estilo.logo}></FontAwesome5>
            <TextInput
                style={estilo.input}
                placeholder="LOGIN"
                value={login}
                onChangeText={(text) => setLogin(text)}
            />
            <TextInput
                style={estilo.input}
                placeholder="SENHA"
                value={senha}
                onChangeText={(text) => setSenha(text)}
                secureTextEntry={true}
            />
            <TouchableOpacity style={estilo.button}
            onPress={()=>navigation.navigate("Tela2")}>
                <Text>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}

const estilo = StyleSheet.create({
    container:{
        backgroundColor: '#ececec',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingStart: 18,
        paddingEnd: 18,
        marginStart: 14,
        marginEnd: 14,
        marginTop: 120,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
        height: Platform.OS === 'web' ? 400 : 400,
        width: Platform.OS === 'web' ? 500 : 300,
        //height: '60vh',
        //width: '70vh',

        //sombra
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        //sombra mobile
        elevation: 5,

        
    },
    input:{
        height: Platform.OS === 'web' ? 40 : 50,
        width: Platform.OS === 'web' ? '80%' : '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 4,
    },
    button:{
        backgroundColor: "#5F9EA0",
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    logo:{
        borderRadius: 100,
        backgroundColor: '#adadad',
        padding: 10,
        marginBottom: 40,
        marginTop: -40,
        fontSize: 40,
    }
});