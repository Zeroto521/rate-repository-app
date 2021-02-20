import { useApolloClient, useQuery } from '@apollo/react-hooks';
import Constants from 'expo-constants';
import React, { useContext } from 'react';
import { ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Link } from 'react-router-native';

import AuthStorageContext from '../contexts/AuthStorageContext';
import { AUTHORIZED_USER } from '../graphql/queries';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  scrollView: {
    flexDirection: 'row',
  },
  tabTouchable: {
    flexGrow: 0,
  },
  tabContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: theme.fontSizes.subheading,
    color: 'white',
  },
});

const AppBarTab = ({ children, ...props }) => {
  return (
    <TouchableWithoutFeedback style={styles.tabTouchable} {...props}>
      <View style={styles.tabContainer}>
        <Text fontWeight="bold" style={styles.tabText}>
          {children}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const AppBar = () => {
  const { data } = useQuery(AUTHORIZED_USER);
  const authStorage = useContext(AuthStorageContext);

  const apolloClient = useApolloClient();

  const user = data ? data.authorizedUser : undefined;

  const signOut = async () => {
    await authStorage.removeAccessToken();
    // with incorrect apolloClient as above, re-renders do not occur
    await apolloClient.resetStore();
  };


  return (
    <Appbar.Header>
      <ScrollView style={styles.scrollView} horizontal>
        <Link to="/" component={AppBarTab}>Repositories</Link>
        {
          user ? (
            <Link to="/" component={AppBarTab} onPress={() => signOut()}>Sign out</Link>
          ) : (
              <Link to="/signIn" component={AppBarTab}>Sign in</Link>
            )
        }
      </ScrollView>
    </Appbar.Header>
  );
};

export default AppBar;
