import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer}  from '@react-navigation/native'
import Login from './pages/login'
import Home from './pages/home'
import Chart from './pages/chart'

const AppStack = createStackNavigator();

function Routes(){
    return(
         <NavigationContainer>
             <AppStack.Navigator screenOptions={{headerShown:false}}>
                 <AppStack.Screen name="Login" component={Login} />                 
                 <AppStack.Screen name="Home" component={Home} />                 
                 <AppStack.Screen name="Chart" component={Chart} />                 
             </AppStack.Navigator>
         </NavigationContainer>
    );
}

export default Routes;