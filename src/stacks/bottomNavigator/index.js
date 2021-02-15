// @flow
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper';
import Icon from '../../lib/icon';
import { capitalize } from '../../helpers';
import HomeStack from '../Home';
import { FlipView } from '../../components';

import { Menu, Wallets } from '../index';
import { TransactionHistory } from '../../screens';

const { Navigator, Screen } = createMaterialBottomTabNavigator();

interface colorOptions {
  primary: string;
  inactive: string;
}

const options = (): React$Node => (
  label: string,
  icon: string,
  { primary, inactive }: colorOptions
): Object => ({
  tabBarLabel: capitalize(label),
  tabBarIcon: ({ focused }) => (
    <Icon name={icon} color={focused ? primary : inactive} size={23} />
  ),
  tabBarAccessibilityLabel: `${label} tab`,
});

const BottomNavigator = (): React$Node => {
  const { colors } = useTheme<colorOptions>();

  return (
    <FlipView>
      <Navigator
        initialRouteName={'Home'}
        backBehaviour={'history'}
        activeColor={colors.primary}
        inactiveColor={colors.inactive}
        shifting={false}
        barStyle={{
          backgroundColor: colors.secondary,
          alignItems: 'center',
          height: 60,
        }}
      >
        <Screen
          name={'Home'}
          component={HomeStack}
          options={options()('Home', 'home-outline', colors)}
        />
        <Screen
          name={'Wallets'}
          component={Wallets}
          options={options()('Wallets', 'wallet-outline', colors)}
        />
        <Screen
          name={'History'}
          component={TransactionHistory}
          options={options()('History', 'timer-outline', colors)}
        />
        <Screen
          name={'Menu'}
          options={options()('Menu', 'menu', colors)}
          component={Menu}
        />
      </Navigator>
    </FlipView>
  );
};

export default BottomNavigator;
