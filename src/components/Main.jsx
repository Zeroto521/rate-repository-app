import React from 'react';
import { View } from 'react-native';
import { Redirect, Route, Switch } from 'react-router-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';


const Main = () => {
  return (
    <View>
      <AppBar />
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/">
          <RepositoryList />
        </Route>
        <Redirect to="/signin" />
      </Switch>
    </View>
  );
};

export default Main;
