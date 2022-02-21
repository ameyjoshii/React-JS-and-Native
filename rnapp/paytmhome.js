import { View, Text, StyleSheet, StatusBar, Image} from 'react-native'
import React from 'react'
import MonthlyBills from './srcs/payments.png'
import OnlineShopping from './srcs/shopping.png'
import BusTickets from './srcs/bus.png'
import MovieTickets from './srcs/movie.png'
import CreditCard from './srcs/credit-card.png'
import Insurance from './srcs/umbrella.png'
import Money from './srcs/money.png'
import Fastag from './srcs/fastag.png'
import BookingGas from './srcs/gas.png'
import Postpaid from './srcs/postpaid.png'
import RechargeMobile from './srcs/mobile.png'
import BroadbandBill from './srcs/router.png'


export default function PaytmHome() {
  return (
    <View>
        <StatusBar backgroundColor={'#013298'}></StatusBar>
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
              <Image style={styling.featuredIconStyle} source={Money}/>
              <Text style={styling.featuredIconText}>Paytm Money</Text>
            </View>
            <View style={styling.iconStyle}>
              <Image style={styling.featuredIconStyle} source={Fastag}/>
              <Text style={styling.featuredIconText}>Buy FASTag</Text>
            </View>
            
          </View>
        </View>
    </View>
  )
}

const styling = StyleSheet.create({
  featuredMenuStyle:{
    backgroundColor:'#d5e2f5',
  },

  iconStyle:{
    alignItems:'center',
    width:"32%",
  },

  featuredTextStyle:{
    color:'#000',
    fontWeight:'bold',
    paddingTop:10,
    paddingLeft:30,
    
  },

  featuredIconContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    padding:10,
    margin:20
  },

  featuredIconStyle:{
    width:35,
    height:35,
  },

  featuredIconText:{
    textAlign:'center',
    color:'#222',
    margin:10,
    width:"70%",
  },

})


/*
#d5e2f5 featured bg
#013298 status bar

*/ 