import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native-web';
import { useSpring, animated } from '@react-spring/web';

export default function NavLateral(props) {
    const hammer = require("../assets/img/legal-hammer.png");
    const [hoveredItem, setHoveredItem] = useState(null);

    const getSpringProps = (item) => useSpring({
        backgroundColor: hoveredItem === item ? '#F2921D' : '#ffffff',
        width: hoveredItem === item ? '115%' : '96%',
        transform: hoveredItem === item ? 'scale(1.05)' : 'scale(1)',
        config: { tension: 300, friction: 20 } 
    });

    return (
        <View style={estilo.container}>
            <View style={estilo.containerImg}>
                <Image source={hammer} style={estilo.hammerImg} />
            </View>
            {/* Item 1 */}
            <animated.div
                style={{
                    ...getSpringProps('item1'),
                    ...estilo.containerItem
                    
                }}
                onMouseEnter={() => setHoveredItem('item1')}
                onMouseLeave={() => setHoveredItem(null)}
            >
                <TouchableOpacity
                    style={{ width: '100%', height: '100%', alignItems: 'center' }} 
                    onPress={() => console.log('Item 1 clicked')}
                >
                    <Text style={hoveredItem === 'item1' ? estilo.textItemHovered : estilo.textItem}>
                        Confirmadas
                    </Text>
                </TouchableOpacity>
            </animated.div>

            {/* Item 2 */}
            <animated.div
                style={{
                    ...getSpringProps('item2'),
                    ...estilo.containerItem
                }}
                onMouseEnter={() => setHoveredItem('item2')}
                onMouseLeave={() => setHoveredItem(null)}
            >
                <TouchableOpacity
                    style={{ width: '100%', height: '100%', alignItems: 'center' }}

                >
                    <Text style={hoveredItem === 'item2' ? estilo.textItemHovered : estilo.textItem}>
                        Cadastradas
                    </Text>
                </TouchableOpacity>
            </animated.div>

            {/* Item 3 */}
            <animated.div
                style={{
                    ...getSpringProps('item3'),
                    ...estilo.containerItem
                }}
                onMouseEnter={() => setHoveredItem('item3')}
                onMouseLeave={() => setHoveredItem(null)}
            >
                <TouchableOpacity
                    style={{ width: '100%', height: '100%', alignItems: 'center' }}
                >
                    <Text style={hoveredItem === 'item3' ? estilo.textItemHovered : estilo.textItem}>
                        Vitória
                    </Text>
                </TouchableOpacity>
            </animated.div>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        backgroundColor: '#f7f7f7',
        width: '200px',
        height: '100%',
        alignItems: 'center',
        borderRightWidth: 4,
        borderColor: '#F2A516',
        zIndex:2
    },
    containerImg: {
        marginTop: '20px',
        marginBottom: '40px',
        width: '100%',
        alignItems: 'center',
    },
    hammerImg: {
        width: 75,
        height: 75,
        resizeMode: 'contain',
        marginBottom: 40,
    },
    containerItem: {
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        paddingTop: '20px',
        paddingBottom: '20px',
        marginBottom: 30,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
    },
    textItem: {
        fontSize: '20px',
    },
    textItemHovered: {
        fontSize: '20px',
        color: 'white'
    }
});
