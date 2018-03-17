import React from "react";
import { View } from "react-native";
import {
  Container,
  Content,
  List,
  ListItem,
  Button,
  Icon,
  Text,
} from 'native-base';

const PostScreen = props => <Container>
        <Content>
          <List>
              <ListItem>
              <Text>qwe</Text>
            </ListItem>
            <ListItem>
              <Text>Nasdfasdf</Text>
            </ListItem>
            <ListItem>
              <Text>Dzxcv</Text>
            </ListItem>
          </List>
          <Text >Hello</Text>
        </Content>
        <Button
          rounded
          onPress={() => Actions.newPost()}
        >
          <Icon
            name="create"
            style={{padding: 5}}
          />
        </Button>
      </Container>;

export default PostScreen;
