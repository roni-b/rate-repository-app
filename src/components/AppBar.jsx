import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import theme from '../theme';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    padding: 15
  },
  scrollView: {
    flexDirection: 'row'
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
      <Pressable onPress={() => console.log("hello")}>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>
      </Pressable>
      <Link to="/signin">
        <Text style={styles.text}>Sign In</Text>
      </Link>
      </ScrollView>
    </View>
  )
};

export default AppBar;