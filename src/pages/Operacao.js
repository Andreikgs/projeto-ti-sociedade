import { StyleSheet, View, Text, TouchableOpacity, Platform, ScrollView } from "react-native"
import { useState, useRef} from 'react';
import {FontAwesome} from "@expo/vector-icons"


export default props =>{
    const [isHovered, setIsHovered] = useState(null);
    const scrollViewRef = useRef(null);

    const handleWheel = (event) => {
      if (scrollViewRef.current) {
          // Scroll horizontalmente, baseado na rotação da roda do mouse
          scrollViewRef.current.scrollTo({ 
              x: scrollViewRef.current.scrollLeft + event.deltaY, 
              animated: true 
          });
      }
  };

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
                        onPress={props.navigation.navigate("Capta")}
                        >
                        <Text style={estilo.txtbtn}>CAPTAÇÃO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[estilo.btn, 
                        isHovered === 'operacao' && estilo.btnHover]}
                        onMouseEnter={() => setIsHovered('operacao')}
                        onMouseLeave={() => setIsHovered(false)}
                        onPress={props.navigation.navigate("Operaca")}
                    >
                        <Text style={estilo.txtbtn}>OPERAÇÃO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[estilo.btn, 
                        isHovered === 'juridico' && estilo.btnHover]}
                        onMouseEnter={() => setIsHovered('juridico')}
                        onMouseLeave={() => setIsHovered(false)}
                        onPress={props.navigation.navigate("juri")}
                    >
                        <Text style={estilo.txtbtn}>JURIDICO</Text>
                    </TouchableOpacity>
                </View>
            )}
            
            <View style={estilo.content}>
              <View style={estilo.navTop}>
                <ScrollView 
                  horizontal={true} 
                  showsHorizontalScrollIndicator={false}
                  onWheel={handleWheel}  // Adiciona o evento de scroll do mouse
                  ref={scrollViewRef}
                  >
                  <TouchableOpacity 
                      style={[estilo.filtros, 
                      isHovered === 'confirmadas' && estilo.btnHover]}
                      onMouseEnter={() => setIsHovered('confirmadas')}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                    <Text style={estilo.txtbtn}>CONFIRMADA</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[estilo.filtros, 
                    isHovered === 'cadastradas' && estilo.btnHover]}
                    onMouseEnter={() => setIsHovered('cadastradas')}
                    onMouseLeave={() => setIsHovered(false)}
                    >
                    <Text style={estilo.txtbtn}>CADASTRADA</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[estilo.filtros, 
                    isHovered === 'andamento' && estilo.btnHover]}
                    onMouseEnter={() => setIsHovered('andamento')}
                    onMouseLeave={() => setIsHovered(false)}
                    >
                    <Text style={estilo.txtbtn}>ANDAMENTO</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[estilo.filtros, 
                    isHovered === 'suspensa' && estilo.btnHover]}
                    onMouseEnter={() => setIsHovered('suspensa')}
                    onMouseLeave={() => setIsHovered(false)}
                    >
                    <Text style={estilo.txtbtn}>SUSPENSA</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[estilo.filtros, 
                    isHovered === 'vitoria' && estilo.btnHover]}
                    onMouseEnter={() => setIsHovered('vitoria')}
                    onMouseLeave={() => setIsHovered(false)}
                    >
                    <Text style={estilo.txtbtn}>VITORIA</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[estilo.filtros, 
                    isHovered === 'derrota' && estilo.btnHover]}
                    onMouseEnter={() => setIsHovered('derrota')}
                    onMouseLeave={() => setIsHovered(false)}
                    >
                    <Text style={estilo.txtbtn}>DERROTA</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[estilo.filtros, 
                    isHovered === 'cancelada' && estilo.btnHover]}
                    onMouseEnter={() => setIsHovered('cancelada')}
                    onMouseLeave={() => setIsHovered(false)}
                    >
                    <Text style={estilo.txtbtn}>CANCELADA</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
            
            
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
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
    },
    content:{
      flex: 1,  // Faz com que o conteúdo ocupe o restante da tela
      flexDirection: 'column',
    },
    navTop:{
      height: '18vh',
      justifyContent: 'center',
      padding: 10,
    },
    filtros:{
      backgroundColor: "#465881",
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      margin: 10,
      width: '12vw',
      height: '10vh',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#FFD700',

      //sombra
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    }
})