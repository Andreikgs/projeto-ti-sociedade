import { StyleSheet, View, Text, TouchableOpacity, Platform, ScrollView, TextInput } from "react-native"
import { useState, useRef} from 'react';
import {FontAwesome} from "@expo/vector-icons"
import { Picker } from "@react-native-picker/picker";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default props =>{
    //DATA
    const [startDate, setStartDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    //
    const [number, setNumber] = useState('');
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
                        onPress={props.navigation.navigate("Operacao")}
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
            
            <View>
                <View style={estilo.form}>
                    <ScrollView 
                        style={estilo.scroll}
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                        onWheel={handleWheel}  // Adiciona o evento de scroll do mouse
                        ref={scrollViewRef}
                    >
                        <Picker
                            style={[estilo.input, { width: '20vw' }]}
                        >
                            <Picker.Item label="Selecione um valor" value="" />
                            <Picker.Item label="Cliente 1" value="opcao1" />
                            <Picker.Item label="Cliente 2" value="opcao2" />
                            <Picker.Item label="Cliente 3" value="opcao3" />
                        </Picker>
                        <TextInput
                            placeholder="Órgão"
                            placeholderTextColor="#06415f"
                            style={[estilo.input, { width: '20vw' }]}
                        ></TextInput>
                        <TextInput
                            placeholder="Local"
                            placeholderTextColor="#06415f"
                            style={[estilo.input, { width: '10vw' }]}
                        ></TextInput>
                        <View style={{ position: 'relative'}}>
                            <TouchableOpacity 
                                style={[estilo.input, { width: '10vw' }]}
                                onPress={() => setDatePickerVisible(!isDatePickerVisible)}
                            >
                                <Text style={{ color: '#000' }}>{startDate.toLocaleString()}</Text> {/* Mostra data e hora */}
                            </TouchableOpacity>
                            {isDatePickerVisible && (
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => {
                                        setStartDate(date);
                                        setDatePickerVisible(false); // Fecha o DatePicker ao selecionar uma data
                                    }}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    dateFormat="Pp"
                                    popperPlacement="bottom"
                                    inline
                                    className="custom-datepicker" // Adicione uma classe personalizada
                                    popperClassName="custom-datepicker-popover" // Classe para o popover
                                />
                            )}
                        </View>
                        <TextInput
                            placeholder="Modalidade"
                            placeholderTextColor="#06415f"
                            style={[estilo.input, { width: '10vw' }]}
                        ></TextInput>
                        <TextInput
                            placeholder="N°"
                            placeholderTextColor="#06415f"
                            keyboardType="numeric"
                            value={number}
                            onChangeText={text => setNumber(text.replace(/[^0-9]/g, ''))}
                            style={[estilo.input, { width: '10vw' }]}
                        ></TextInput>
                        <TextInput
                            placeholder="Identificação"
                            placeholderTextColor="#06415f"
                            keyboardType="numeric"
                            value={number}
                            onChangeText={text => setNumber(text.replace(/[^0-9]/g, ''))}
                            style={[estilo.input, { width: '10vw' }]}
                        ></TextInput>
                        <TextInput
                            placeholder="Portal"
                            placeholderTextColor="#06415f"
                            style={[estilo.input, { width: '10vw' }]}
                        ></TextInput>
                        <TextInput
                            placeholder="Objeto"
                            placeholderTextColor="#06415f"
                            multiline={true}
                            style={[estilo.input, {width: '20vw', height: '20vh' }]}
                        ></TextInput>
                        
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
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input:{
        backgroundColor: "#D3D3D3",
        margin: 10,
        padding: 10,
        height: '5vh',
        color: "#000000",
        border: 1,
        borderStyle: 'solid',
        borderRadius: 20,
    },
    form:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
        margin: 5,
        width: '80vw',
        height: '90vh',
        borderWidth: 1,
        borderColor: "#FFD700",


        //sombra
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0},
        shadowOpacity: 0.35,
        shadowRadius: 5,
    },
    inputButton: {
        backgroundColor: "#D3D3D3",
        margin: 10,
        padding: 12,
        borderRadius: 10,
    },
    scroll:{
        flex:1,
    }
})