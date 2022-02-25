import { View, Text, Image, StyleSheet, Pressable} from 'react-native'
import React from 'react'

export default function DetailsPage(props) {
    const productData = props?.route?.params?.data;
    
    return (
    <View style={pageStyle.viewStyle}>
        <Pressable onPress={props.navigation.goBack} style={pageStyle.backStyle}>
            <Text style={pageStyle.backStyleTxt}>Go Back</Text>
        </Pressable>
        <View style={pageStyle.containerStyle}>
            <Image
                source={{uri: productData.image_url}}
                style={pageStyle.imageStyle}
            />
            <Text style={pageStyle.nameStyle}>{productData.name}</Text>
            <Text style={pageStyle.priceStyle}>Rs.{productData.price}/-</Text>
        </View>
        <Pressable style={pageStyle.helpStyle} onPress={()=> props.navigation.navigate("RNLogin")}>
            <Text style={pageStyle.helpTxtStyle}>Need Help? Contact Us!!</Text>
        </Pressable>
    </View>
  )
}

const pageStyle = StyleSheet.create({
    
    viewStyle:{
        flex:1,
        backgroundColor:'#C5CAE9',
        padding:20,
    },

    nameStyle:{
        textAlign:'center',
        color:'#000',
        marginTop:20,
        fontSize:20,
        fontWeight:'bold',
    },

    containerStyle:{
        marginTop:20,
        borderRadius:20,
        padding:10,
        borderWidth:1,
        borderStyle:'solid',
        backgroundColor:'#FFF9C4',
    },

    imageStyle:{
        padding:20,
        height:300,
        width:300,
        marginTop:20,
        alignSelf:'center',
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#000',
        borderRadius:20,
    },

    backStyleTxt:{
        fontSize:14,
        textAlign:'center',
        backgroundColor:'#ff9',
        fontWeight:'bold',
        color:'#000',
    },

    backStyle:{
        width:60,
        borderWidth:1,
        borderStyle:'solid',
        color:'#000',
    },

    priceStyle:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
        color:'#f00',
    },

    helpStyle:{
        width:150,
        marginTop:10,
        alignSelf:'center'
    },
    
    helpTxtStyle:{
        textAlign:'center',
        fontSize:13,
        textDecorationLine:'underline',
        fontWeight:'bold',
        color:'#444',
    },
})