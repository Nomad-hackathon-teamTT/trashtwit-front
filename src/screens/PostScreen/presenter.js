import React, { Component } from 'react';
import { View, Image, TextInput } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export default class PostScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            {/* User information */}
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.mozilla.org/media/img/logos/firefox/logo-quantum-high-res.cfd87a8f62ae.png'}} />
                <Body>
                  <Text>Fire</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            {/* User input items(Image or text) */}
            <CardItem>
              <Body>
                {/* <Image source={{uri: 'https://www.mozilla.org/media/img/logos/firefox/logo-quantum-high-res.cfd87a8f62ae.png'}} style={{height: 200, width: 200, flex: 1}}/> */}
                <TextInput
                 placeholder="Type your word"
                 style={{height: 70, width: 350}}
                  multiline = {6}
                  maxHeight = {70}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Left>
              <Button iconLeft transparent primary>
            <Icon name='paper-plane' />
            <Text>tweet</Text>
          </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}