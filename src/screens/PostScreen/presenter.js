import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class PostScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.mozilla.org/media/img/logos/firefox/logo-quantum-high-res.cfd87a8f62ae.png'}} />
                <Body>
                  <Text>Firefox</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                {/* <Image source={{uri: 'https://www.mozilla.org/media/img/logos/firefox/logo-quantum-high-res.cfd87a8f62ae.png'}} style={{height: 200, width: 200, flex: 1}}/> */}
                <Text>
                “말하지 않아도 알아요. 그가 나를 사랑한다는 것을.”

제74회 베니스국제영화제 황금사자상 수상 

제75회 골든글러브 감독상, 음악상 수상

제71회 영국 아카데미 감독상, 음악상, 미술상 수상

제43회 LA비평가협회상 감독상, 여우주연상, 촬영상,

제90회 아카데미 13개 부문 노미네이트 

제52회 전미비평가협회 여우주연상 수상 
        </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
              <Button iconLeft transparent primary>
            <Icon name='beer' />
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