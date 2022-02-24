import React from 'react'
import ApiCall from './apicall'
import DetailsPage from './detailspage'
import RNLogin from './rnLogin'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PhonepeHome from './phonepehome'
import PaytmHome from './paytmhome'
import Search from './search'
import Quiz from './quiz'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName='PaytmHome'
     screenOptions={{
       headerShown: false,
     }}>
       <Stack.Screen name="ApiCall" component={ApiCall} />
       <Stack.Screen name="DetailsPage" component={DetailsPage} />
       <Stack.Screen name="RNLogin" component={RNLogin} />
       <Stack.Screen name="PhonepeHome" component={PhonepeHome} />
       <Stack.Screen name="PaytmHome" component={PaytmHome} />
       <Stack.Screen name="Search" component={Search} />
       <Stack.Screen name="Quiz" component={Quiz} />
     </Stack.Navigator>
   </NavigationContainer>
  );
};