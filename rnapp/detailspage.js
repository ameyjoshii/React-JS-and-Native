import { View, Text, Image, StyleSheet, Pressable} from 'react-native'
import React from 'react'

export default function DetailsPage(props) {
    const productData = props?.route?.params?.data;
    
    return (
    <View style={pageStyle.viewStyle}>
        <Pressable onPress={props.navigation.goBack}>
            <Text style={pageStyle.backStyle}>Go Back</Text>
        </Pressable>
        <View style={pageStyle.containerStyle}>
            <Image
                source={{uri: productData.image_url}}
                style={pageStyle.imageStyle}
            />
            <Text style={pageStyle.nameStyle}>{productData.name}</Text>
            <Text style={pageStyle.priceStyle}>Rs.{productData.price}/-</Text>
        </View>
        <Pressable onPress={()=> props.navigation.navigate("RNLogin")}>
            <Text style={pageStyle.helpStyle}>Need Help? Contact Us!!</Text>
        </Pressable>
     {/*   <Pressable onPress={props.navigation.navigate("RNLogin")}>
            <Text style={pageStyle.locateStyle}>Locate Us!!</Text>
    </Pressable> */}
    </View>
  )
}

const pageStyle = StyleSheet.create({
    
    viewStyle:{
        flex:1,
        backgroundColor:'#cff',
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
        backgroundColor:'#fee',
    },

    imageStyle:{
        padding:20,
        height:300,
        width:300,
        marginTop:20,
        alignSelf:'center',
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

    priceStyle:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
        color:'#f00',
    },

    helpStyle:{
        textAlign:'center',
        fontSize:12,
        marginTop:10,
        textDecorationLine:'underline',
        fontWeight:'bold',
        color:'#444',
    },

   /* locateStyle:{
        textAlign:'center',
        fontSize:12,
        marginTop:10,
        textDecorationLine:'underline',
        fontWeight:'bold',
        color:'#444',
    },*/
})