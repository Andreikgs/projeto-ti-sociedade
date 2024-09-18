import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavLateral from '../components/NavLateral';
import NavTop from '../components/NavTop';
import ListLicitacoes from '../components/ListLicitacoes';

export default function App() {
  return (
    <View style={styles.container}> 
        <NavLateral/>
        <View style={{flex:1}}>
          <NavTop/>
          <ListLicitacoes/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    flexDirection:'row'
  },
});
