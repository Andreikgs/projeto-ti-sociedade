import { StyleSheet, Text, View } from "react-native";
import Balance from "../components/Balance";

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
        backgroundColor: '#ababab'
    },
    escrita:{
        fontSize: 50,
    },
    login:{
        marginTop: 10,
    }

})
    
