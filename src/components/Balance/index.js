import { StyleSheet, Text, View } from "react-native";

export default function Balance(){
    return(
        <View style={estilo.container}>
            <View style={estilo.item}>
                <Text style={estilo.itemTitle}>Saldo</Text>
            
            <View style={estilo.content}>
                <Text style={estilo.currencySymbol}>R$</Text>
                <Text style={estilo.balance}>1.500,00</Text>
            </View>
            </View>

            <View style={estilo.item}>
                <Text style={estilo.itemTitle}>Gastos</Text>
            
            <View style={estilo.content}>
                <Text style={estilo.currencySymbol}>R$</Text>
                <Text style={estilo.expenses}>500,00</Text>
            </View>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        height: 400,
        width: 500,
    },
    itemTitle:{
        fontSize: 20,
        color: '#909090',

    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',

    },
    currencySymbol:{
        color: '#909090',
        marginRight: 5,
    },
    balance:{
        color: 'green',
        fontSize: 20,
    },
    expenses:{
        color: 'red',
        fontSize: 20,
    }
});