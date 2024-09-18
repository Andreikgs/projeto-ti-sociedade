import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native-web';
import { useSpring, animated } from '@react-spring/web';

export default function ListLicitacoes(props) {
    // const [hoveredItem, setHoveredItem] = useState(null);

    // const getSpringProps = (item) => useSpring({
    //     backgroundColor: hoveredItem === item ? '#F2921D' : '#ffffff',
    //     color: hoveredItem === item ? 'white' : 'black',
    //     transform: hoveredItem === item ? 'scale(1.05,1.05)' : 'scale(1,1)',
    // });

    return (
        <View style={estilo.container}>
            <View style={estilo.containerList}>
                <View style={estilo.containerItem}>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            PP
                        </Text>
                        <Text style={estilo.textItem}>
                            PREF MUN DE LONDRINA
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            CADASTRO
                        </Text>
                        <Text style={estilo.textItem}>
                            25/10/24 08:00
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            LEILÃO:
                        </Text>
                        <Text style={estilo.textItem}>
                            25/10/24 10:00
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            SITUAÇÃO:
                        </Text>
                        <Text style={estilo.textItem}>
                            CONFIRMADA
                        </Text>
                    </View>
                </View>
                {/*  */}
                <View style={estilo.containerItem}>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            PP
                        </Text>
                        <Text style={estilo.textItem}>
                            PREF MUN DE LONDRINA
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            CADASTRO
                        </Text>
                        <Text style={estilo.textItem}>
                            25/10/24 08:00
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            LEILÃO:
                        </Text>
                        <Text style={estilo.textItem}>
                            25/10/24 10:00
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            SITUAÇÃO:
                        </Text>
                        <Text style={estilo.textItem}>
                            CONFIRMADA
                        </Text>
                    </View>
                </View>
                {/*  */}
                <View style={estilo.containerItem}>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            PP
                        </Text>
                        <Text style={estilo.textItem}>
                            PREF MUN DE LONDRINA
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            CADASTRO
                        </Text>
                        <Text style={estilo.textItem}>
                            25/10/24 08:00
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            LEILÃO:
                        </Text>
                        <Text style={estilo.textItem}>
                            25/10/24 10:00
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            SITUAÇÃO:
                        </Text>
                        <Text style={estilo.textItem}>
                            CONFIRMADA
                        </Text>
                    </View>
                </View>
                {/*  */}
                <View style={estilo.containerItem}>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            PP
                        </Text>
                        <Text style={estilo.textItem}>
                            PREF MUN DE LONDRINA
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            CADASTRO
                        </Text>
                        <Text style={estilo.textItem}>
                            25/10/24 08:00
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            LEILÃO:
                        </Text>
                        <Text style={estilo.textItem}>
                            25/10/24 10:00
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            SITUAÇÃO:
                        </Text>
                        <Text style={estilo.textItem}>
                            CONFIRMADA
                        </Text>
                    </View>
                </View>
                {/*  */}
                <View style={estilo.containerItem}>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            PP
                        </Text>
                        <Text style={estilo.textItem}>
                            PREF MUN DE LONDRINA
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            CADASTRO
                        </Text>
                        <Text style={estilo.textItem}>
                            25/10/24 08:00
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            LEILÃO:
                        </Text>
                        <Text style={estilo.textItem}>
                            25/10/24 10:00
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            SITUAÇÃO:
                        </Text>
                        <Text style={estilo.textItem}>
                            CONFIRMADA
                        </Text>
                    </View>
                </View>
                {/*  */}
                <View style={estilo.containerItem}>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            PP
                        </Text>
                        <Text style={estilo.textItem}>
                            PREF MUN DE LONDRINA
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            CADASTRO
                        </Text>
                        <Text style={estilo.textItem}>
                            25/10/24 08:00
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            LEILÃO:
                        </Text>
                        <Text style={estilo.textItem}>
                            25/10/24 10:00
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            SITUAÇÃO:
                        </Text>
                        <Text style={estilo.textItem}>
                            CONFIRMADA
                        </Text>
                    </View>
                </View>
                {/*  */}
                <View style={estilo.containerItem}>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            PP
                        </Text>
                        <Text style={estilo.textItem}>
                            PREF MUN DE LONDRINA
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            CADASTRO
                        </Text>
                        <Text style={estilo.textItem}>
                            25/10/24 08:00
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            LEILÃO:
                        </Text>
                        <Text style={estilo.textItem}>
                            25/10/24 10:00
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            SITUAÇÃO:
                        </Text>
                        <Text style={estilo.textItem}>
                            CONFIRMADA
                        </Text>
                    </View>
                </View>
                {/*  */}
                <View style={estilo.containerItem}>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            PP
                        </Text>
                        <Text style={estilo.textItem}>
                            PREF MUN DE LONDRINA
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            CADASTRO
                        </Text>
                        <Text style={estilo.textItem}>
                            25/10/24 08:00
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            LEILÃO:
                        </Text>
                        <Text style={estilo.textItem}>
                            25/10/24 10:00
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            SITUAÇÃO:
                        </Text>
                        <Text style={estilo.textItem}>
                            CONFIRMADA
                        </Text>
                    </View>
                </View>
                {/*  */}
                <View style={estilo.containerItem}>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            PP:
                        </Text>
                        <Text style={estilo.textItem}>
                            PREF MUN DE LONDRINA
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            CADASTRO:
                        </Text>
                        <Text style={estilo.textItem}>
                            25/10/24 08:00
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            LEILÃO:
                        </Text>
                        <Text style={estilo.textItem}>
                            25/10/24 10:00
                        </Text>
                    </View>
                    <View style={estilo.subContainerItem}>
                        <Text style={estilo.textItemBold}>
                            SITUAÇÃO:
                        </Text>
                        <Text style={estilo.textItem}>
                            CONFIRMADA
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flexGrow: 1,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    containerList: {
        height: '100%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop:-130
    },
    containerItem: {
        borderColor: '#F2A516',
        borderWidth: 4,
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor:'white'
    },
    subContainerItem: {
        flexDirection: 'row',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20
    },
    textItemBold:{
        fontSize: 19,
        fontWeight:700,
        marginRight:20
    },
    textItem:{
        fontSize: 19,
    }
});
