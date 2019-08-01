import React from 'react'
import {Text,View,ImageBackground,TextInput,StyleSheet} from 'react-native'
import {Card,Title,Paragraph} from 'react-native-paper'
import Header from './header'

export default class HomeScreen extends React.Component{
static navigationOptions = {
    drawerLabel : 'Home Page',    
}  
render(){
    return(
      <View>
        {/* <Header title='Home Screen' /> */}
        <ImageBackground style={{width:'100%',height:'60%'}} resizeMode='stretch' source={require('.././search-background.jpg')}>
          <TextInput label='search' style={{backgroundColor:'white',borderRadius:30,margin: 40,marginTop:80,}} />
        </ImageBackground>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:'-30%'}}>
          <View>
            <Card style={styles.cardStyle}>
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
            </Card>
            <Card style={styles.cardStyle}>
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
            </Card>
            <Card style={styles.cardStyle}>
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
            </Card>
          </View>
          <View>
            <Card style={styles.cardStyle}>
                <Card.Content>
                  <Title>Card title</Title>
                  <Paragraph>Card content</Paragraph>
                </Card.Content>
            </Card>
            <Card style={styles.cardStyle}>
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
            </Card>
            <Card style={styles.cardStyle}>
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
            </Card>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  cardStyle : {
    marginBottom : '8%',
    elevation : 4
  }
})