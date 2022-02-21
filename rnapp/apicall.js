import { View, Text, ScrollView, Button, Image, StyleSheet, Touchable, Pressable, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function ApiCall(props) {
    
    const [apiData, setApiData] = useState([]);
    const apiUrl = "https://api.dotshowroom.in/api/dotk/catalog/getItemsBasicDetailsByStoreId/2490120?category_type=0"
    var searchUrl="https://api.dotshowroom.in/api/dotk/catalog/searchItems"
    const [searchData, setSearchApiData] = useState([]);
    useEffect(() => {
        axios.get(apiUrl).then(data => {
            console.log(data,"sas");
            setApiData(data.data);
    });
    }, []);
    
    const handleChange = (value) => {
        axios.post(searchUrl, {
            page: 1,
            search_text: value,
            store_id: 2490120,
        }).then((data)=> {
            console.log(data,"asasd");
            setSearchApiData(data.data); 
        })
    };
    useEffect(() => {
        axios.get(searchUrl).then(data => {
            console.log(data,"asas");
            setSearchApiData(data.data);
        });
    }, []);

    return (
        <View style={style.container}>
            <Text style={style.pageHeading}>Fruit-Kart</Text>
            <View style={style.searchbar}>
                <TextInput style={style.searchInput}
                    placeholder="Search Here!!"
                    onChangeText={(value) => handleChange(value)}
                />
                <Pressable style={style}>
                    <Text style={style.clearAll}>Clear All</Text>
                </Pressable>
            </View>
            <ScrollView>
                {searchData?.data?.map(product => {
                    return(
                        <View>
                            <Text>{product?.name}</Text>
                        </View>
                    );
                })}
            </ScrollView>
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
                                                <Button 
                                                    title='Add to Cart'  
                                                    onPress={() => props.navigation.navigate('DetailsPage',{
                                                        data: productItem,
                                                    })
                                                }
                                                    />
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
        padding:20,
        backgroundColor:'#cff',
    },

    searchbar:{
        flexDirection:'row',
        paddingLeft:20,
        marginBottom:10,
        marginTop:10,
        borderRadius:20,
        backgroundColor:'#fee',
        borderStyle:"solid",
        borderColor:'#000',
        borderWidth:1,
    },

    clearAll:{
        color:'#000',
        marginLeft:160,
        marginTop:12,
    },

    pageHeading:{
        fontSize:20,
        textAlign:"center",
        margin:5,
        fontWeight:"bold",
        color:'#ffff',
        backgroundColor:'#07b',
        borderStyle:"solid",
        borderColor:'#000',
        borderWidth:2,
    },
    categoryStyle:{
        textAlign:'center', 
        fontWeight:'bold', 
        color:'#000', 
        backgroundColor:'#ff9',
        borderStyle:"solid",
        borderColor:'#000',
        borderWidth:1,
        padding:5, 
        fontSize:17,
    },
    productItemContainer:{
        flexDirection:'row',
        flexWrap: "wrap",
        padding:5,
    },
    productItemStyle:{
        width:"47%",
        margin:5,
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:5,
        marginVertical:5,
        padding:10,
        backgroundColor:'#fee',
    },
    imageprop:{
        height:150, 
        width:"100%",
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
    btnStyle:{
        padding:10,
    },
})
    
