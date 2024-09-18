import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native-web';
import { useSpring, animated } from '@react-spring/web';

export default function NavTop(props) {
    const [hoveredItem, setHoveredItem] = useState(null);

    const getSpringProps = (item) => useSpring({
        backgroundColor: hoveredItem === item ? '#F2921D' : '#ffffff',
        color: hoveredItem === item ? 'white' : 'black',
        transform: hoveredItem === item ? 'scale(1.05,1.05)' : 'scale(1,1)',
    });

    return (
        <View style={styles.container}>
            <animated.div
                style={{
                    ...getSpringProps('item1'),
                    ...styles.containerItem,
                }}
                onMouseEnter={() => setHoveredItem('item1')}
                onMouseLeave={() => setHoveredItem(null)}
            >
                <TouchableOpacity>
                    <Text style={hoveredItem === 'item1' ? styles.textItemHovered : styles.textItem}>
                        CONFIRMADAS
                    </Text>
                </TouchableOpacity>
            </animated.div>
            <animated.div
                style={{
                    ...getSpringProps('item2'),
                    ...styles.containerItem,
                    borderWidth: hoveredItem === 'item2' ? 4 : 2, 
                }}
                onMouseEnter={() => setHoveredItem('item2')}
                onMouseLeave={() => setHoveredItem(null)}
            >
                <TouchableOpacity>
                    <Text style={hoveredItem === 'item2' ? styles.textItemHovered : styles.textItem}>
                        CADASTRADAS
                    </Text>
                </TouchableOpacity>
            </animated.div>
            <animated.div
                style={{
                    ...getSpringProps('item3'),
                    ...styles.containerItem,
                    borderWidth: hoveredItem === 'item3' ? 4 : 2, 
                }}
                onMouseEnter={() => setHoveredItem('item3')}
                onMouseLeave={() => setHoveredItem(null)}
            >
                <TouchableOpacity>
                    <Text style={hoveredItem === 'item3' ? styles.textItemHovered : styles.textItem}>
                        SUSPENSAS
                    </Text>
                </TouchableOpacity>
            </animated.div>
            <animated.div
                style={{
                    ...getSpringProps('item4'),
                    ...styles.containerItem,
                    borderWidth: hoveredItem === 'item4' ? 4 : 2,
                }}
                onMouseEnter={() => setHoveredItem('item4')}
                onMouseLeave={() => setHoveredItem(null)}
            >
                <TouchableOpacity>
                    <Text style={hoveredItem === 'item4' ? styles.textItemHovered : styles.textItem}>
                        VITÓRIAS
                    </Text>
                </TouchableOpacity>
            </animated.div>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f6f6ff',
        height: 'fit-content',
        paddingTop:70,
        paddingBottom:100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    containerItem: {
        flexBasis: 300,
        zIndex: 3,
        height:100,
        justifyContent:'center',
        alignContent:'center'
    },
    textItem:{
        textAlign:'center',
        fontSize:22,
        fontWeight:600
    },
    textItemHovered: {
        textAlign:'center',
        fontSize:22,
        color: 'white',
        fontWeight:600
    }
});
