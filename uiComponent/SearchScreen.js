import React from 'react'
import {Text,View,ImageBackground,TextInput,StyleSheet} from 'react-native'
import {Card,Title,Paragraph} from 'react-native-paper'
// import Header from './header'

export default class SearchScreen extends React.Component{
static navigationOptions = {
    drawerLabel : 'Search Screen'
}  
render(){
    return(
    //   <Header title='Search Screen' />
    <View>
        <Text>Search Screen</Text>
        <Card>
            <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
            </Card.Content>
        </Card>
    </View>
    )
  }
}
