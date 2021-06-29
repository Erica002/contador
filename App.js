import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count,setCount] = useState(0);
  
  function aumentar(){
    setCount(count+1);
    console.log(count);
  }

  function diminuir(){
    setCount(count-1);
  }

  return (
    <View style = {styles.container}>
      <Text style={styles.textTitle}>Contador de Pessoas</Text>
      <View>
        <Text style = {styles.count}> {count} </Text>
      </View>
      <TouchableOpacity style = {styles.button} onPress = {aumentar}>
        <Text style ={styles.Text}> + </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.button} onPress = {diminuir}>
        <Text style ={styles.Text}> - </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169E1',
    alignItems: 'center',
    justifyContent: 'center'
  },

  button: {
    width: 210,
    height: 80,
    backgroundColor:'#00008B',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 8
  },

  count: {
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    padding: 30,
    margin: 30,
    fontSize: 30,
    height: 110,
    width: 205,
    borderRadius: 20
  
  },

  textTitle: {
    color: 'white',
    fontSize: 30
  },

  Text: {
    color: 'white',
    fontSize: 30
  },


});
