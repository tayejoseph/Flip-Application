/**
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';
import { theme } from './src/base/theme';
import {
  Splash,
  Settings,
  Account,
  AccountDetail,
  ChangePassword,
  Profile,
  GiftCard,
  GiftCards,
  FundWallet,
  AirTimeAndData,
  BitcoinTrade,
  BuyData,
  DataBill,
  BillPaymentLists,
  Deposit,
  DepositValue,
  BillPayment,
  Withdrawal,
  Wallet,
} from './src/screens';
import { Auth, BottomNavigator } from './src/stacks';
const { Navigator, Screen } = createStackNavigator();

const App: () => React$Node = () => {
  const { auth } = useSelector(state => state);
  const linking = {
    prefixes: ['https://flip.com', 'flip://'],
    config: {
      //  screens: [[
      //
      //
      // []]
    },
  };

  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <FlashMessage position="top" />
      <NavigationContainer linking={linking}>
        <Navigator initialRouteName={'Splash'} headerMode={'none'}>
          <Screen name={'Splash'} component={Splash} />
          {!!auth.token ? (
            <>
              <Screen name={'Home'} component={BottomNavigator} />
              <Screen name={'Setting'} component={Settings} />
              <Screen name={'Account'} component={Account} />
              <Screen name={'AccountDetail'} component={AccountDetail} />
              <Screen name={'ChangePassword'} component={ChangePassword} />
              <Screen name={'Profile'} component={Profile} />
              <Screen name={'Bitcoin'} component={BitcoinTrade} />
              <Screen name={'GiftCard'} component={GiftCard} />
              <Screen name={'GiftCards'} component={GiftCards} />
              <Screen name={'FundWallet'} component={FundWallet} />
              <Screen name={'AirTimeAndData'} component={AirTimeAndData} />
              <Screen name={'BuyData'} component={BuyData} />
              <Screen name={'DataBill'} component={DataBill} />
              <Screen name={'BillPaymentLists'} component={BillPaymentLists} />
              <Screen name={'BillPayment'} component={BillPayment} />
              <Screen name={'Deposit'} component={Deposit} />
              <Screen name={'DepositValue'} component={DepositValue} />
              <Screen name={'Wallet'} component={Wallet} />
              <Screen name={'Withdrawal'} component={Withdrawal} />
            </>
          ) : (
            <Screen name={'Auth'} component={Auth} />
          )}
        </Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
