import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import { Link, useNavigate } from 'react-router-native';
import theme from '../theme';
import Constants from 'expo-constants';
import { useApolloClient, useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';

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
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const navigate = useNavigate();

  const { data } = useQuery(GET_CURRENT_USER);
  const currentUser = data?.me;

  const onSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate('/');
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
      <Pressable onPress={() => console.log("hello")}>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>
      </Pressable>
      {currentUser ? (
        <Link onPress={onSignOut}>
          <Text style={styles.text}>Sign out</Text>
        </Link>
      ) : (
        <Link to="/signin">
          <Text style={styles.text}>Sign in</Text>
        </Link>
      )}
      </ScrollView>
    </View>
  )
};

export default AppBar;