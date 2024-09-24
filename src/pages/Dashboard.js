import { StyleSheet, Text, TouchableOpacity, Platform } from "react-native"
import { View } from "react-native"
import {FontAwesome} from "@expo/vector-icons"


export default props =>{

    return(
        <View style={estilo.container}>
            {Platform.OS === 'web' && ( // Verifica se está rodando na web
                <View style={estilo.navLateral}>
                    <FontAwesome name="legal" size={'4vw'} color="#04091f" style={estilo.logo}></FontAwesome>
                    <TouchableOpacity style={estilo.btn}>
                        <Text style={estilo.txtbtn}>CAPTAÇÃO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.btn}>
                        <Text style={estilo.txtbtn}>OPERAÇÃO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.btn}>
                        <Text style={estilo.txtbtn}>JURIDICO</Text>
                    </TouchableOpacity>
                </View>
            )}
            
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff"

    },
    logo:{
        borderRadius: 100,
        backgroundColor: '#FFD700',
        padding: 10,
        marginBottom: 40,
        marginTop: 20,
    },
    navLateral:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        width: '10vw',
        backgroundColor: "#04091f",

        //sombra
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    btn:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        width: '9vw',
        marginBottom:10,
        backgroundColor: "#465881",
        borderRadius: 40,
    },
    txtbtn:{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1vw',
        fontWeight: 'bold',
    }
})