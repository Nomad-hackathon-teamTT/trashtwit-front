import React, { Component } from "react";
import { View, TextInput, Button} from "react-native";
import {
  Container,
  Content,
  List,
  ListItem,
  Icon,
  Text,
} from 'native-base';

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {1000}
      />
    );
  }
}

export default class UselessTextInputMultiline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Multiline Placeholder',
    };
  }

  // If you type something in the text box that is a color, the background will change to that
  // color.
  render() {
    return (
     <View style={{
       backgroundColor: '#ffffff',
       borderBottomColor: '#000000',
       borderBottomWidth: 1 }}
     >
     <UselessTextInput
       multiline = {true}
       numberOfLines = {8}
       onChangeText={(text) => this.setState({text})}
       value={this.state.text}
     />
     <Button
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      />

     </View>
    );
  }
}
