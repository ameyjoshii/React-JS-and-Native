import { View, Text, ScrollView, Button, Image, StyleSheet, Pressable} from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import SearchIcon from './srcs/search.png'

export default function ApiCall(props) {
    
    const [apiData, setApiData] = useState([]);
    const apiUrl = "https://api.dotshowroom.in/api/dotk/catalog/getItemsBasicDetailsByStoreId/2490120?category_type=0"

    useEffect(() => {
        axios.get(apiUrl).then(data => {
          //  console.log(data,"sas");
            setApiData(data.data);
    });
    }, []);
    
    return (
        <View style={style.container}>
            <View style={style.searchiconview}>
                <Text style={style.pageHeading}>Fruit-Kart</Text>
                <Pressable onPress={() => props.navigation.navigate("Search")}>
                    <Image style={style.searchicon} source={SearchIcon}/>
                </Pressable>
            </View>
            <ScrollView>
                {apiData?.store_items?.map(item => {
                    return(
                        <View>
                            <Text style={style.categoryStyle}>{item.category && item.category.name}</Text>
                            <View style={style.productItemContainer}>
                                {
                                    item?.items?.map((productItem) => {
                                        return <View style={style.productItemStyle}>
                                            <Image style={style.imageprop} source={{uri: productItem?.image_url}}/>
                                            <Text numberOfLines={1} style={style.nameStyle}>{productItem?.name}</Text>
                                            <Text style={style.oprice}>Rs.{productItem?.price}/-</Text>
                                            <Text style={style.dprice}>Rs.{productItem?.discounted_price}/-</Text>
                                            <View style={style.btnStyle}>
                                                <Pressable style={style.addCart} onPress={() => props.navigation.navigate('DetailsPage',{data: productItem})}>
                                                    <Text style={style.addCartTxt}>
                                                        Add to Cart
                                                    </Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                        
                                    })
                                }
                            </View>
                            
                        </View>
                    );                
                })}
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({  
    container:{
        flex:1,
        paddingHorizontal:15,
        backgroundColor:'#C5CAE9',
    },

    searchicon:{
        width:30,
        height:30,
        marginTop:7,
        marginHorizontal:5,
    },

    searchiconview:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:'#555',
        borderBottomWidth:2,
    },

    pageHeading:{
        fontSize:20,
        textAlign:"center",
        margin:5,
        paddingVertical:5,
        marginHorizontal:10,
        paddingHorizontal:100,
        fontWeight:"bold",
        color:'#ffff',
        backgroundColor:'#303F9F',
        borderStyle:"solid",
        borderColor:'#000',
        borderWidth:2,
        borderRadius:10,
    },

    categoryStyle:{
        textAlign:'center', 
        fontWeight:'bold', 
        color:'#000', 
        backgroundColor:'#FFEB3B',
        borderStyle:"solid",
        borderColor:'#000',
        borderWidth:1,
        padding:5,
        marginTop:2,
        marginHorizontal:10, 
        fontSize:17,
        borderRadius:10,
    },

    productItemContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginHorizontal:5,
    },

    productItemStyle:{
        width:"47%",
        margin:5,
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:5,
        marginVertical:5,
        padding:10,
        backgroundColor:'#FFF9C4',
    },

    imageprop:{
        borderRadius:100,
        height:150, 
        width:"100%",
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#000',
    },

    nameStyle:{
        fontSize:15,
        color:'#000',
        fontWeight:'bold',
        marginTop:5,
    },

    oprice:{
        color:'#000',
        textDecorationLine:'line-through',
        fontSize:13,
    },

    dprice:{
        color:'#f00',
        fontWeight:'bold',
        fontSize:15,
    },

    addCart:{
        borderRadius:20,
        borderWidth:1,
        borderStyle:'solid',
        marginTop:10,
        width:100,
        alignSelf:'center',
        padding:5,
        backgroundColor:'#3F51B5',
    },

    addCartTxt:{
        fontSize:15,
        textAlign:'center',
        fontWeight:'bold',
        color:'#FFFFFF',
    },
})
    
