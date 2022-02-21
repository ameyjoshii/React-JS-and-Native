import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import bell from './srcs/bell.png'
import userimg from './srcs/user.png'
import scanqr from './srcs/qrcode.png'
import help from './srcs/help.png'

export default function PhonepeHome() {
  return (
    <View>
        <StatusBar backgroundColor={'#431f81'}></StatusBar>
        <View style={styling.topMenuStyle}>
          <Image source={{uri:userimg}}>Monthly Bills</Image>
          <View>
            <Text></Text>
            <Text></Text>
          </View>
          <View>
            <Image/>
            <Image/>
            <Image/>
          </View>
        </View>
    </View>
  )
}



const styling = StyleSheet.create({
  topMenuStyle:{
    backgroundColor:'#'
  },
})

/* 
status bar #431f81
icons #6734af
top menu #
*/