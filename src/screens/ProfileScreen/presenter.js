import React from 'react'
import { Dimensions, Image, View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'
import PropTypes from 'prop-types'
import { Separator } from 'native-base';


const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    justifyContent: 'space-between',
    marginBottom: 5,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 10,
    padding: 0,
  },
  date: {
    color: 'gray',
    fontSize: 12.5,
  },
  postRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 6,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
    width: Dimensions.get('window').width * 1,
  },
  postImage: {
    backgroundColor: 'rgba(0, 0, 0, 0.075)',
    height: 200,
  },
  userImage: {
    marginRight: 12,
  },
  wordRow: {
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  wordText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  name: {
    fontWeight: '600',
    fontSize: 14,
  },
  username: {
    fontWeight: '200',
    fontSize: 12,
  },
  content: {
    fontSize: 14,
  }
})

const Post = ({ containerStyle, user, image, createdDate, sentences }) => (
  <View style={[styles.container, containerStyle]}>
    <View style={styles.postRow}>
      <View style={styles.userImage}>
        <Avatar
          xlarge
          rounded
          source={{
            //  uri: user.avatar,
             uri: 'https://avatars2.githubusercontent.com/u/23091621?s=400&v=4'
          }}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
      </View>
      <View>
        {/* <Text>{user.name}</Text>
        <Text>{user.username}</Text>
        <Text style={styles.date}></Text> */}
        <Text style={styles.name}>You-sung</Text>
        <Text style={styles.username}>@DevFallingStar </Text>
        <Text style={styles.username}>stardung86@gmail.com </Text>
        <Text style={styles.content}>Gotcha!</Text>
      </View>
    </View>
    <View style={styles.wordRow}>
      <Text style={styles.wordText}>{sentences}</Text>
    </View>
    {image && <Image style={styles.postImage} source={{ uri: 'https://avatars2.githubusercontent.com/u/23091621?s=400&v=4' }} />}
  </View>
)

// Post.propTypes = {
//   containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
//   image: PropTypes.string,
//   user: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//   }).isRequired,
//   createdDate: PropTypes.string.isRequired,
//   sentences: PropTypes.string.isRequired,
// }

// Post.defaultProps = {
//   containerStyle: {},
//   image: null,
// }

export default Post