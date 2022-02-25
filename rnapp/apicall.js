import { ActivityIndicator, View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import SearchIcon from './srcs/search.png'

export default function ApiCall(props) {
    const [cartData, setcartData] = useState({});
    const [apiData, setApiData] = useState([]);
    const [totalQty, settotalQty] = useState(0);
    const [isLoading, setisLoading] = useState(false);
    const apiUrl = "https://api.dotshowroom.in/api/dotk/catalog/getItemsBasicDetailsByStoreId/2490120?category_type=0"

    useEffect(() => {
        axios.get(apiUrl).then(data => {
            setApiData(data.data);
    });
    }, []);

    useEffect(() => {
      var totalQty=0;
      cartData && 
      Object.keys(cartData)?.length && 
      Object.keys(cartData).map(key => {
        totalQty = totalQty + cartData[key]?.quantity
      });
      settotalQty(totalQty)
    }, [cartData])
    

    const handleCart = productItem => {
        let cartPayload = {...cartData};
        cartPayload[productItem?.id] = {
            ...productItem,
            quantity: 1,
        };
        setcartData(cartPayload);
    };
    
    const decrementCount = (id) => {
        let cartPayload = {...cartData};
        cartPayload[id].quantity = cartPayload[id].quantity - 1;
        setcartData(cartPayload);
    };

    const incrementCount = (id) => {
        let cartPayload = {...cartData};
        cartPayload[id].quantity = cartPayload[id].quantity + 1;
        setcartData(cartPayload);
    };

    const renderCartButton = (productItem) => {
        return cartData[productItem?.id]?.quantity ? 
            (<View style={style.counter}>
                <TouchableOpacity onPress={() => decrementCount(productItem?.id)}>
                    <Text style={style.decrement}>-</Text>
                </TouchableOpacity>
                <Text style={style.itemCount}>{cartData[productItem?.id]?.quantity}</Text>
                <TouchableOpacity onPress={() => incrementCount(productItem?.id)}>
                    <Text style={style.increment}>+</Text>
                </TouchableOpacity>
            </View> ): (<TouchableOpacity style={style.addCart} onPress={() => handleCart(productItem)}>
                <Text style={style.addCartTxt}>
                    Add to Cart
                </Text>
            </TouchableOpacity>)
    }

    return (
        <View style={style.container}>
            <View style={style.searchiconview}>
                <Text style={style.pageHeading}>Fruit-Kart</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("Search")}>
                    <Image style={style.searchicon} source={SearchIcon}/>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {apiData?.store_items?.map(item => {
                    return(
                        <View>
                            <Text style={style.categoryStyle}>{item.category && item.category.name}</Text>
                            <View style={style.productItemContainer}>
                                {
                                    item?.items?.map((productItem) => {
                                        return(
                                        <View style={style.productItemStyle}>
                                            <TouchableOpacity onPress={() => props.navigation.navigate('DetailsPage',{data: productItem})}>
                                            <Image style={style.imageprop} source={{uri: productItem?.image_url}}/>
                                            <Text numberOfLines={1} style={style.nameStyle}>{productItem?.name}</Text>
                                            <Text style={style.oprice}>Rs.{productItem?.price}/-</Text>
                                            <Text style={style.dprice}>Rs.{productItem?.discounted_price}/-</Text>
                                            </TouchableOpacity>
                                            {renderCartButton(productItem)}
                                        </View>
                                        )  
                                    })
                                }
                            </View>
                            
                        </View>
                    );                
                })}
            </ScrollView>
            {cartData && Object.keys(cartData).length ? ( 
            <TouchableOpacity style={style.cartBar}>
                <Text style={style.cartBarTxt}>View Cart:</Text>
                <Text style={style.cartBarTxt}>{totalQty}</Text>
            </TouchableOpacity> 
            ) : null}
        </View>
    );
}

const style = StyleSheet.create({  
    container:{
        flex:1,
        paddingHorizontal:15,
        backgroundColor:'#C5CAE9',
    },

    cartBar:{
       flexDirection:'row',
       flexWrap:'wrap',
       justifyContent:'space-between',
       paddingHorizontal:10,
       paddingVertical:5,
       backgroundColor:'#303F9F',
       borderStyle:'solid',
       borderColor:'#000',
       borderWidth:2,
       borderRadius:8,        
    },

    cartBarTxt:{
       fontWeight:'bold',
       color:'#fff'
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

    decrement:{
        backgroundColor:'#3F51B5',
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10,
        paddingHorizontal:15,
        fontSize:18,
        color:'#ffff',
    },

    increment:{
        backgroundColor:'#3F51B5',
        borderBottomRightRadius:10,
        borderTopRightRadius:10,
        paddingHorizontal:15,
        justifyContent:'center',
        fontSize:18,
        color:'#ffff',
    },

    counter:{
        marginTop:10,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginHorizontal:15,
    },

    itemCount:{
        fontSize:18,
        color:'#000',
    },
})
    
