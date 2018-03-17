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

const FeedScreen = props => <Container>
        <Content>
          <List>
              <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
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

export default FeedScreen;
