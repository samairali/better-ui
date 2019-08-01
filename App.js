import React from 'react'
import {Text,View,ImageBackground,TextInput,StyleSheet} from 'react-native'
import {Card,Title,Paragraph} from 'react-native-paper'
import HomeScreen from './uiComponent/HomeScreen'
import {createDrawerNavigator,createAppContainer, createStackNavigator} from 'react-navigation';
import SearchScreen from './uiComponent/SearchScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'


const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    SearchScreen : SearchScreen
  }
);
const StackNavi = createStackNavigator(
  {
    home : DrawerNavigator
  },
  {
    defaultNavigationOptions:({navigation}) => {
      var a ;
      if(navigation.state.index == 0){
        this.a = 'Home Screen'
      }else if(navigation.state.index == 1){
        this.a = 'Search Screen'
      }
      return {
          headerLeft : <Ionicons 
                      name='md-menu' 
                      size={34} 
                      style={{color:'red',marginLeft:10}} 
                      onPress={() => {
                          navigation.toggleDrawer()
                          console.log(navigation)
                        }
                      } 
                      /> ,
          title : this.a,
          headerTitleStyle : {
            color : 'red',
            fontWeight : "bold",
            fontSize : 30,
            marginLeft : 0
          }
      }
    }
  }
)
export default createAppContainer(StackNavi);

