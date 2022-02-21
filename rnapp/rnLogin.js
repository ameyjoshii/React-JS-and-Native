import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Pressable } from 'react-native'
import React from 'react'

export default function RNLogin(props) {
  const [formData, setFormData] = useState({
    fname:null,
    lname:null,
    age:null,
    pin:null
  });
  const handleChangeText = (value, fieldName) => {

  }

  return (
    <View style={pagestyle.mainPage}>
        <Pressable onPress={props.navigation.goBack}>
            <Text style={pagestyle.backStyle}>Go Back</Text>
        </Pressable>
        <View>
          <Text style={pagestyle.textStyle}>First Name</Text>
          <TextInput value={formData.fname} style={pagestyle.textInputStyle} placeholder='Enter your first name' maxLength={20}/>
        </View>
        <View>
          <Text style={pagestyle.textStyle}>Last Name</Text>
          <TextInput value={formData.lname} style={pagestyle.textInputStyle} placeholder='Enter your Last name' maxLength={20}/>
        </View>
        <View> 
          <Text style={pagestyle.textStyle}>Age</Text>
          <TextInput value={formData.age} style={pagestyle.textInputStyle} placeholder='Enter your Age' keyboardType='numeric' maxLength={3}/>
        </View>
        <View>  
          <Text style={pagestyle.textStyle}>Secret Pin:</Text>
          <TextInput value={formData.pin} style={pagestyle.textInputStyle} placeholder='Enter secret pin' keyboardType='numeric' secureTextEntry={true} maxLength={4}/>
        </View>
        <View style={pagestyle.submit}>
          <Button title='Submit' onPress={() => props.navigation.navigate("ApiCall")}/>
        </View>
    </View>
  )
}

const pagestyle = StyleSheet.create({
  mainPage:{
    padding:20,
  },
  
  backStyle:{
    fontSize:14,
    width:60,
    textAlign:'center',
    backgroundColor:'#ff9',
    borderWidth:1,
    borderStyle:'solid',
    fontWeight:'bold',
    color:'#000',
  },

  textStyle:{
    color:'#000',
    padding:10,
  },

  textInputStyle:{
    borderStyle:"solid",
    borderColor:'#000',
    borderWidth:0.5,
    marginLeft:10,
  },
  
  submit:{
    padding:10,
  },

})


    
