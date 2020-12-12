import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import db from '../Config';

export default class ReadStoryScreen extends React.Component{
  render(){
    return(
      <View style = {{flex: 1, backgroundColor:'#FFEFEF'}}>
        <Header
          backgroundColor={'#FF0038'}
          centerComponent={{
            text:'Story Hub',
            style:{color:'#EEE', fontSize:20, fontWeight:'bold'}
          }}
        />
        <View style = {{alignItems:'center'}}>
          <TouchableOpacity style = {readStoryTextButtonStyle}>
            <Text style = {styles.readStoryTextStyle}>Read Story</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  readStoryTextButtonStyle:{
    alignSelf:'center',
    width:100,
    height:30,
    borderRadius:15,
    backgroundColor:'#FF0038',
    borderColor:'#000',
    borderWidth:1,
    alignContent:'center',
    alignItems:'center',
    margin:30,
    justifyContent:'center'
  },
  readStoryTextStyle:{
    color:'#EEE',
    fontSize:18,
    fontWeight:'bold'
  }
});