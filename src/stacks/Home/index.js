// @flow
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../screens';

const { Screen, Navigator } = createStackNavigator();

const HomeStack = (): React$Node => (
  <Navigator initialRouteName={'Home'} headerMode={'none'}>
    <Screen name={'Home'} component={Home} />
  </Navigator>
);

export default HomeStack;
