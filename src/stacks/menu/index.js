//@flow
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Menu as MenuList } from '../../screens';
import {
  Settings,
  Account,
  ChangePassword,
  Profile,
  AccountDetail,
} from '../../screens';

const { Navigator, Screen } = createStackNavigator();
const Menu = (): React$Node => (
  <Navigator headerMode={'none'} initialRouteName={'Menu'}>
    <Screen name={'Menu'} component={MenuList} />
  </Navigator>
);

export default Menu;
