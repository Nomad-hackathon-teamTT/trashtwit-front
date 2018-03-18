import React, { Component }  from "react";
import { View } from "react-native";
import { withNavigation } from 'react-navigation';
import {
  Container,
  Content,
  List,
  ListItem,
  Button,
  Icon,
  Text,
} from 'native-base';

class FeedScreen extends Component {
  showDetail(tId) {
    this.props.navigation.navigate(
        'Detail',
        {tId}
      );
  }

  render() {
    return (
      <Content>
        <List>
            <ListItem>
            <Text>Simon Mignoleqqqt</Text>
          </ListItem>
          <ListItem>
            <Text>Nathaniel Clyne</Text>
          </ListItem>
          <ListItem>
            <Text>Dejan Lovren</Text>
          </ListItem>
        </List>
      </Content>
    )
  }
}

export default FeedScreen;
