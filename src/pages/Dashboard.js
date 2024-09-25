import { StyleSheet, View, Text, TouchableOpacity, Platform } from "react-native"
import { useState } from 'react';
import {FontAwesome} from "@expo/vector-icons"


export default props =>{
    const [isHovered, setIsHovered] = useState(null);

    return(
        <View style={estilo.container}>
            {Platform.OS === 'web' && ( // Verifica se está rodando na web
                <View style={estilo.navLateral}>
                    <FontAwesome name="legal" size={'4vw'} color="#04091f" style={estilo.logo}></FontAwesome>
                    <TouchableOpacity 
                        style={[estilo.btn, 
                        isHovered === 'captacao' && estilo.btnHover]}
                        onMouseEnter={() => setIsHovered('captacao')}
                        onMouseLeave={() => setIsHovered(false)}
                        onPress={() => props.navigation.navigate("capta")}
                        >
                        <Text style={estilo.txtbtn}>CAPTAÇÃO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[estilo.btn, 
                        isHovered === 'operacao' && estilo.btnHover]}
                        onMouseEnter={() => setIsHovered('operacao')}
                        onMouseLeave={() => setIsHovered(false)}
                        onPress={() => props.navigation.navigate("Operacao")}
                    >
                        <Text style={estilo.txtbtn}>OPERAÇÃO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[estilo.btn, 
                        isHovered === 'juridico' && estilo.btnHover]}
                        onMouseEnter={() => setIsHovered('juridico')}
                        onMouseLeave={() => setIsHovered(false)}
                        onPress={() => props.navigation.navigate("capta")}
                    >
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
        borderRightWidth: 1,
        borderColor: '#FFD700',

        //sombra
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
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
        transition: 'all 0.3s ease',
    },
    btnHover: {
        backgroundColor: "#FFD700",  // Cor do botão quando o mouse estiver em cima
        transform: [{ scale: 1.1 }], // Aumenta o botão
    },
    txtbtn:{
        fontSize: '1vw',
        fontWeight: 'bold',
    }
})