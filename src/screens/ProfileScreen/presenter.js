import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import{
    Content,
    Thumbnail,
    Text,
    Body,
    Container
} from 'native-base';

const ProfileScreen = props => 
    <Container>
    <Content>
   <Body>
   <Thumbnail square size={180} source={{uri: 'https://avatars2.githubusercontent.com/u/23091621?s=400&v=4'}}/>
            <View style={styles.nameContainer}>
                <Text style={styles.name}> Yousung </Text>
                <Text style={styles.username}> @Devfallingstar </Text>
            </View>
            <Text style={styles.content}> Software engineer from gachon </Text>
        </Body>
    </Content>
    </Container>;

export default ProfileScreen;