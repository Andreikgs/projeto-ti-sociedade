import { Button, StyleSheet, View } from "react-native";


export default props =>(
    <View style={estilo.container}>
        <View style={estilo.botoes}>
            {
                props.voltar
                ?
                (<Button
                    title="voltar"
                    onPress={()=>props.navigation.goBack()}
                />)
                :
                false
            }

            <Button
            title="Logout"
            onPress={()=>props.navigation.navigate("Login")}
            />

            {
                props.avancar
                ?
                (<Button 
                    title="Avançar"
                    onPress={()=>props.navigation.navigate(props.avancar)}
                />)
                :
                false
            }
        </View>
        <View style={estilo.conteudo}>
            {props.children}
        </View>
    </View>
)


const estilo = StyleSheet.create({
container:{
    flex:1
},
botoes:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
},
conteudo:{
    flex:1
}
})