import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import {FontAwesome} from "@expo/vector-icons"


export default props =>{
    const [valorLogin, setValorLogin] = useState("");
    const doLogin = ()=>{
        if(valorLogin === "" || valorSenha === ""){
            console.warn("ANIMAL");
            props.navigation.navigate("Dash")
        }else if(valorLogin === "Andrei" && valorSenha === "123"){
            setValorSenha("");
            props.navigation.navigate("Dash")
        }else{
            console.warn("Algo de errado não esta certo")
        }
    }
    const [valorSenha, setValorSenha] = useState("");

    return(
        <View style={estilo.container}>
            <FontAwesome name="legal" size={70} color="#04091f" style={estilo.logo}></FontAwesome>
            <TextInput 
                placeholder="Login"
                placeholderTextColor="#06415f"
                style={estilo.input}
                value={valorLogin}
                onChangeText={(lgn)=>setValorLogin(lgn)}
                />

            <TextInput 
                placeholder="Senha"
                placeholderTextColor="#06415f"
                style={estilo.input} 
                secureTextEntry={true}
                value={valorSenha}
                onChangeText={(sn)=>setValorSenha(sn)}
                />

            <TouchableOpacity 
                style={estilo.btnLogin}
                onPress={doLogin}
            >
                <Text style={estilo.txtbtnlogin}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={estilo.txtEsqueci}>Sign Up</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#04091f"
    },
    logo:{
        borderRadius: 100,
        backgroundColor: '#FFD700',
        padding: 10,
        marginBottom: 20,
    },
    txtlogin:{
        color: "#FFD700",
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input:{
        backgroundColor: "#465881",
        marginTop: 20,
        padding: 12,
        width: 300,
        color: "#FFD700",
        border: 1,
        borderStyle: 'solid',
        borderRadius: 20,
        borderColor: "#FFD700"
    },
    txtEsqueci:{
        color: "#fff",
        marginTop: 12,
    },
    btnLogin:{
        backgroundColor: "#FFD700",
        width: 200,
        padding: 12,
        borderRadius: 20,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtbtnlogin:{
        color: "#04091f",
        fontWeight: 'bold'
    }
})