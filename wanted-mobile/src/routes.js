import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer}  from '@react-navigation/native'
import Home from './pages/home'

const AppStack = createStackNavigator();

function Routes(){
    return(
         <NavigationContainer>
             <AppStack.Navigator screenOptions={{headerShown:false}}>
                 <AppStack.Screen name="Home" component={Home} />                 
             </AppStack.Navigator>
         </NavigationContainer>
    );
}

export default Routes;