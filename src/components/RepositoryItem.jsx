import { View, Image, StyleSheet } from 'react-native';
import Text from './Text'
import theme from '../theme'
import helper from './helper'

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  flexImage: {
    height: 50,
    width: 50,
    borderRadius: 5,
    marginRight: 10
  },
  flexUpperText: {
    flexDirection: 'column',
  },
  flexLowerText: {
    flexDirection: 'row',
  },
  flexLowerTextColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 10,
    padding: 10
  },
  flexLanguage: {
    color: 'white',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 5,
    alignSelf: 'flex-start'
  }
});

const RepositoryItem = ({item}) => {
  return (
    <View style={styles.flexContainer}>
      <Image style={styles.flexImage} source={{ uri: item.ownerAvatarUrl }}></Image>
      <View style={styles.flexUpperText}>
        <Text fontWeight="bold" fontSize="subheading">{item.fullName}</Text>
        <Text color="textSecondary">{item.description}</Text>
        <Text style={styles.flexLanguage}>{item.language}</Text>
      </View>
      <View style={styles.flexLowerText}>
        <View style={styles.flexLowerTextColumn}>
          <Text fontWeight="bold">{helper(item.stargazersCount)}</Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View style={styles.flexLowerTextColumn}>
          <Text fontWeight="bold">{helper(item.forksCount)}</Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View style={styles.flexLowerTextColumn}>
          <Text fontWeight="bold">{helper(item.reviewCount)}</Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
        <View style={styles.flexLowerTextColumn}>
          <Text fontWeight="bold">{helper(item.ratingAverage)}</Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
    </View>
  )
}

export default RepositoryItem