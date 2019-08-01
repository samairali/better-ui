import React from 'react'
import {Text,View} from 'react-native'
import { Appbar } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function header (props){
    return(
        <Appbar.Header style={{backgroundColor:'white',borderBottomColor:'black'}}>
            <Ionicons 
            name='md-menu' 
            size={34} 
            style={{color:'red',marginLeft:5}} 
            onPress={({navigation}) => console.log(navigation)} 
            />
            <Text style={{color:'red',marginLeft:15,fontWeight:"bold",fontSize:30}}>{props.title}</Text>
        </Appbar.Header>
    );
}