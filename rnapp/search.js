import { View, Text, StyleSheet, ScrollView, TextInput, Image, Button, Pressable} from 'react-native'
import React, {useState , useEffect} from 'react'
import axios from 'axios';

export default function Search(props) {
    var url="https://api.dotshowroom.in/api/dotk/catalog/searchItems"
    
    const [SearchData, setSearchApiData] = useState("");
    const [ShowError, setShowError] = useState(false);

    const handleChange = (value) => {
      axios.post(url, {
        page: 1,
        search_text: value,
        store_id: 2490120,
      }).then((data) => {
       // console.log(data);
        if (data.data?.items.length){
          setSearchApiData(data.data);
        }else{
          setSearchApiData("No Item Found");
          setShowError(true);
        }
      })
    };

   // const contactList = [
    //  {name: "Amey", phone}
    //]
    //const resetText = () => {
   //   setSearchApiData("");
   //   setShowError(false);
   // }

    return (
    <View style={styler.viewStyle}>
      <Pressable onPress={props.navigation.goBack} style={styler.backStyle}>
            <Text style={styler.backStyleTxt}>Go Back</Text>
      </Pressable>
      <View>
        <TextInput style={styler.searchbar}
        placeholder="Search Here!!" 
        onChangeText={(value) => handleChange(value)}/>
      </View>
        <ScrollView>
            {SearchData?.items?.map(items => {
              return(
                <View style={styler.productItemContainer}>
                    {
                      <View style={styler.productItemStyle}>
                        <Image style={styler.imageprop} source={{uri:items?.image_url}}/>
                        <Text numberOfLines={1} style={styler.nameStyle}>{items?.name}</Text>
                        <Text style={styler.oprice}>Rs.{items?.price}/-</Text>
                        <Text style={styler.dprice}>Rs.{items?.discounted_price}/-</Text>
                        <Pressable style={styler.addCart} onPress={() => props.navigation.navigate('DetailsPage',{data:items})}>
                          <Text style={styler.addCartTxt}>
                              Add to Cart
                          </Text>
                        </Pressable>
                      </View>
                        
                    }
                </View>
              );                
            })}
        </ScrollView>
    </View>
  );
};

const styler = StyleSheet.create({
  viewStyle:{
    flex:1,
    backgroundColor:'#C5CAE9',
    padding:15,
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
  
  searchbar:{
    flexDirection:'row',
    paddingLeft:20,
    marginBottom:5,
    marginTop:10,
    borderRadius:20,
    backgroundColor:'#FFEB3B',
    borderStyle:"solid",
    borderColor:'#000',
    borderWidth:1,
  },

  clearAll:{
      color:'#000',
      marginLeft:160,
      marginTop:12,
  },

  productItemContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
  },

  productItemStyle:{
    width:"47%",
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