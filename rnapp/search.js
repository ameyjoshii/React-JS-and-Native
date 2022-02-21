import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';

export default function Search() {
    var url="https://api.dotshowroom.in/api/dotk/catalog/searchItems"
    const handleChange = () => {
    axios 
    };
    return (
    <View>
      <Text>Search</Text>
      <TextInput style={styler.searchbar}
      placeholder="Search Here!!"
      onChangeText={() => handleChange()}
      />
    </View>
  )
}

const styler = StyleSheet.create({
    searchbar:{
        padding:30,
    },
})