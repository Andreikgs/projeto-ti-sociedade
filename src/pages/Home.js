import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Balance from "../components/Balance";
import Movements from "../components/Movements";

export default function Home(){
    return(
        <View style={estilo.container}>
            <Balance style={estilo.login}></Balance>
        </View>
        
    )
}

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    escrita:{
        fontSize: 50,
    },
    login:{
        marginTop: 10,
    }

})
    
