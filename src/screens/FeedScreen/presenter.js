import React, { Component } from "react";
import { View, Alert } from "react-native";
import styles from "./styles";
import {
  Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text
} from 'native-base';

class FeedScreen extends Component {

  _onPressList() {
      Alert.alert("자러가자~~");
  }

  render() {
    return (
  <Container>
        <Content>
          <List>
            <ListItem avatar onPress={this._onPressList}>
              <Left>
              <Thumbnail source={{ uri: 'https://avatars2.githubusercontent.com/u/23091621?s=400&v=4' }} />
              </Left>
              <Body>
                <View>
                <Text style={styles.name}>Yu-sung</Text>
                <Text style={styles.username}>@DevFallingStar</Text>
                </View>
                <Text style= {styles.content}> I wanna go home right now </Text>
              </Body>
              <Right>
                <Text note>3:00 pm</Text>
              </Right>
              </ListItem>
            </List>

            <List>
            <ListItem avatar>
              <Left>
              <Thumbnail source={{ uri: 'https://avatars0.githubusercontent.com/u/23066745?s=400&v=4' }} />
              </Left>
              <Body>
                <Text style={styles.name}>Soo</Text>
                <Text style={styles.username}>@Ansoo</Text>
                <Text style= {styles.content}> 나는 세계 최고의 코딩실력을 가진 범인이다... 나는 범인이다.... 노크를 할 까 그래 여기선 노부부의 경계를 사지않는 편이 중요하다. 똑독똑 수월하게 안으로 안내되었다.  </Text>
              </Body>
              <Right>
                <Text note>3:14 pm</Text>
              </Right>
              </ListItem>
            </List>
        </Content>
      </Container>
    );
  }
}


export default FeedScreen;
