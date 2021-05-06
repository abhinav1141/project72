import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet,KeyboardAvoidingView,ToastAndroid } from 'react-native';
import {Header} from 'react-native-elements';
import db from '../Config'
export default class WriteStoryScreen extends React.Component {
  constructor(props){ 
    super(props); 
    this.state = { 
      title: '', 
      author: '', 
      storyText: '', 
    } 
  }
  submitStory = ()=>{
    db.collection("stories").add({
        title:  this.state.title,
        author: this.state.author,
        storyText: this.state.storyText,
    })
    this.setState({
        title: '',
        author: '',
        storyText:''
    })
    ToastAndroid.show("Story has been submitted", ToastAndroid.SHORT)
}
    render() {
      return(
        <KeyboardAvoidingView style={styles.container} behavior="" enabled>
        <Header
          backgroundColor={'pink'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: 'white', fontSize: 40 },
          }}
        />

        <TextInput
        placeholder="      STORY TITLE"
          style={styles.titleBox}
          onChangeText={text => {
            this.setState({ title: text });
          }}
          placeholderTextColor='black'
          value={this.state.title}
        />
        <TextInput
        placeholder="      AUTHOR"
          style={styles.authorBox}
          onChangeText={text => {
            this.setState({ author: text });
          }}
          placeholderTextColor='black'
          value={this.state.author}
        />
         <TextInput
         placeholder="     WRITE YOUR STORY"
          style={styles.storyBox}
          onChangeText={text => {
            this.setState({ storyText: text });
          }}
          placeholderTextColor='black'
          value={this.state.storyText}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={this.submitStory}
        >
          <Text style={styles.buttonText}> Submit </Text>
        </TouchableOpacity> 
        
        </KeyboardAvoidingView>
     ) 
    }
  }

      

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    titleBox:{
      width: 410,
      height: 75,
      borderWidth: 4.5,
      marginTop:20,
      fontSize: 20,
      marginLeft:30
    },
    authorBox:{
      width: 410,
      height: 75,
      borderWidth: 4.5,
      fontSize: 20,
      marginTop:20,
      marginLeft:30
    },
    storyBox:{
      width: 410,
      height: 200,
      borderWidth: 4.5,
      fontSize: 20,
      marginTop:20,
      marginLeft:30
    },
    goButton: {
      width: '50%',
      height: 55,
      alignSelf: 'center',
      padding: 10,
      margin: 10,
      backgroundColor:"pink"
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
  });