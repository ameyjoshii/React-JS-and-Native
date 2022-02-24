import { View, Text, StyleSheet, StatusBar, Image, ScrollView } from 'react-native'
import React from 'react'
import MonthlyBills from './srcs/payments.png'
import OnlineShopping from './srcs/shopping.png'
import BusTickets from './srcs/bus.png'
import MovieTickets from './srcs/movie.png'
import CreditCard from './srcs/credit-card.png'
import Insurance from './srcs/umbrella.png'
import PaytmMoney from './srcs/money.png'
import Fastag from './srcs/fastag.png'
import BookingGas from './srcs/gas.png'
import Postpaid from './srcs/postpaid.png'
import RechargeMobile from './srcs/mobile.png'
import BroadbandBill from './srcs/router.png'
import Paytm from './srcs/paytm.png'
import Bell from './srcs/bell.png'
import Menu from './srcs/menu.png'
import AddMoney from './srcs/addmoney.png'
import Search from './srcs/search_paytm.png'


export default function PaytmHome() {
  return (
    <View>
        <StatusBar backgroundColor={'#013298'}></StatusBar>
        <View style={styling.staticHeader}>
          <Image source={Menu} style={styling.pageHeadingicons}/>
          <Image source={Paytm} style={styling.pageHeadinglogo}/>
          <Image source={Search} style={styling.pageHeadingicons}/>
          <Image source={Bell} style={styling.pageHeadingicons}/>
          <Image source={AddMoney} style={styling.pageHeadingicons}/>
        </View>
        <View>
          <ScrollView>
            <View style={styling.featuredMenuStyle}>
              <Text style={styling.featuredTextStyle}>Featured</Text>
              <View style={styling.featuredIconContainer}>
                <View style={styling.iconStyle}>
                  <Image style={styling.featuredIconStyle} source={MonthlyBills}/>
                  <Text style={styling.featuredIconText}>Monthly Bills</Text>
                </View>
                <View style={styling.iconStyle}>
                  <Image style={styling.featuredIconStyle} source={OnlineShopping}/>
                  <Text style={styling.featuredIconText}>Online Shopping</Text>
                </View>
                <View style={styling.iconStyle}>
                  <Image style={styling.featuredIconStyle} source={BusTickets}/>
                  <Text style={styling.featuredIconText}>Bus Tickets</Text>
                </View>
                <View style={styling.iconStyle}>
                  <Image style={styling.featuredIconStyle} source={MovieTickets}/>
                  <Text style={styling.featuredIconText}>Movie Tickets</Text>
                </View>
                <View style={styling.iconStyle}>
                  <Image style={styling.featuredIconStyle} source={CreditCard}/>
                  <Text style={styling.featuredIconText}>Paytm Credit Card</Text>
                </View>
                <View style={styling.iconStyle}>
                  <Image style={styling.featuredIconStyle} source={Insurance}/>
                  <Text style={styling.featuredIconText}>Insurance Quotes</Text>
                </View>
                <View style={styling.iconStyle}>
                  <Image style={styling.featuredIconStyle} source={PaytmMoney}/>
                  <Text style={styling.featuredIconText}>Paytm Money</Text>
                </View>
                <View style={styling.iconStyle}>
                  <Image style={styling.featuredIconStyle} source={Fastag}/>
                  <Text style={styling.featuredIconText}>Buy FASTag</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styling.recommendedText}>Recommended</Text>
            </View>
            <View style={styling.recommendedContainer}>
              <View style={styling.recommendedIcon}>
                <Text style={styling.recommendedIcontxt}>Book your Gas Cylinder</Text>
                <Image style={styling.recommendedIconImg} source={BookingGas}/>
              </View>
              <View style={styling.recommendedIcon}>
                <Text style={styling.recommendedIcontxt}>Paytm Postpaid</Text>
                <Image style={styling.recommendedIconImg} source={Postpaid}/>
              </View>
              <View style={styling.recommendedIcon}>
                <Text style={styling.recommendedIcontxt}>Recharge your Mobile</Text>
                <Image style={styling.recommendedIconImg} source={RechargeMobile}/>
              </View>
              <View style={styling.recommendedIcon}>
                <Text style={styling.recommendedIcontxt}>Pay your Broadband Bill</Text>
                <Image style={styling.recommendedIconImg} source={BroadbandBill}/>
              </View>              
            </View>
            <View>
              <Text style={styling.recommendedText}>Shop On Mall</Text>
            </View>
            <ScrollView horizontal>
                <View style={styling.shopMallIcon}>
                  <Image style={styling.shopMallImg} source={{uri:"https://rukminim1.flixcart.com/flap/200/200/image/42f9a853f9181279.jpg?q=90"}}/>
                  <Text style={styling.shopMalltxt}>Mobiles and Gadgets</Text>
                </View>
                <View style={styling.shopMallIcon}>
                  <Image style={styling.shopMallImg} source={{uri:"https://rukminim1.flixcart.com/flap/300/400/image/081396bf56fb2153.jpg?q=90"}}/>
                  <Text style={styling.shopMalltxt}>Men's Fashion</Text>
                </View>
                <View style={styling.shopMallIcon}>
                  <Image style={styling.shopMallImg} source={{uri:"https://rukminim1.flixcart.com/flap/400/400/image/50a024fec7cd8f35.jpg?q=90"}}/>
                  <Text style={styling.shopMalltxt}>Storage Devices</Text>
                </View>
                <View style={styling.shopMallIcon}>           
                  <Image style={styling.shopMallImg} source={{uri:"https://rukminim1.flixcart.com/flap/200/200/image/570ea9.jpg?q=90"}}/>
                  <Text style={styling.shopMalltxt}>Top Offers</Text>
                </View>
                <View style={styling.shopMallIcon}>
                  <Image style={styling.shopMallImg} source={{uri:"https://rukminim1.flixcart.com/flap/200/200/image/3e16b5155e5a68fb.jpg?q=90"}}/>
                  <Text style={styling.shopMalltxt}>Grocery</Text>
                </View>
                <View style={styling.shopMallIcon}>
                  <Image style={styling.shopMallImg} source={{uri:"https://rukminim1.flixcart.com/flap/300/400/image/6d636d87c1e79629.jpg?q=90"}}/>
                  <Text style={styling.shopMalltxt}>Women's Fashion</Text>
                </View>
            </ScrollView>
          </ScrollView>
        </View>
    </View>
  )
}

const styling = StyleSheet.create({
  staticHeader:{
    flexDirection:'row',
    flexWrap:'wrap',
  },
  
  pageHeadinglogo:{
    height:"100%",
    marginHorizontal:15,
    padding:10,
    width:85,
    resizeMode:'contain',
  },
  
  pageHeadingicons:{
    height:25,
    margin:20,
    width:25,
    paddingVertical:5,
  },
  
  featuredMenuStyle:{
    backgroundColor:'#d5e2f5',
  },

  iconStyle:{
    alignItems:'center',
    width:"22%",
    margin:5,
  },

  featuredTextStyle:{
    color:'#000',
    fontWeight:'bold',
    marginTop:10,
    marginBottom:10,
    paddingLeft:20,
    fontSize:17,
  },

  featuredIconContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    margin:10,
  },

  featuredIconStyle:{
    width:35,
    height:35,
    margin:10,
  },

  featuredIconText:{
    textAlign:'center',
    color:'#000',
    margin:5,
    width:"88%",
    marginBottom:10,
  },
  
  recommendedText:{
    color:'#000',
    fontWeight:'bold',
    marginTop:10,
    marginBottom:10,
    paddingLeft:20,
    fontSize:17,
  },

  recommendedContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    margin:10,
  },

  recommendedIcon:{
    flexDirection:'row',
    flexWrap:'wrap',
    width:"38%",
    margin:5,
    justifyContent:'space-between',
    marginHorizontal:20,
  },

  recommendedIcontxt:{
    color:'#000',
    fontSize:14,
    width:'65%',
  },
  
  recommendedIconImg:{
    width:35,
    height:35,
    margin:7,
  },

  shopMallIcon:{
    flexDirection:'column',
    flexWrap:'wrap',
    margin:5,
  },

  shopMallImg:{
    width:50,
    height:50,
    borderRadius:100,
    marginBottom:5,
    alignSelf:'center',
  },

  shopMalltxt:{
    color:'#000',
    fontSize:12,
    textAlign:'center',
    width:'80%'
  },
})


/*
#d5e2f5 featured bg
#013298 status bar

*/ 