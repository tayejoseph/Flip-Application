//@flow
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Wallets as WalletsList } from '../../screens';

const { Navigator, Screen } = createStackNavigator();

const Wallets = (): React$Node => {
  return (
    <Navigator headerMode={'none'} iniitialRouteName={'Wallets'}>
      <Screen name={'Wallets'} component={WalletsList} />
    </Navigator>
  );
};

export default Wallets;
