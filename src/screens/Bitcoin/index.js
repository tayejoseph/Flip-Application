// @flow
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { TopNav } from '../../components';
import { useRoute } from '@react-navigation/native';
import { FlipContainer, Header, Title, FlipContent } from '../../Layout';
import { getCryptoTicker, getWalletDetails } from '../../store/actions/Crypto';
import { colors } from '../../constants';
import styles from './styles';
import BuyBTC from './Buy';
import SellBTC from './Sell';
import ReceiveBTC from './Receive';

const BitcoinTrade = (): React$Node => {
  const {
    params: { type },
  } = useRoute();

  const dispatch = useDispatch();
  const { crytoRate, walletData } = useSelector(state => ({
    ...state.crypto,
    ...state.user,
  }));

  useEffect(() => {
    dispatch(getWalletDetails());
    setTimeout(() => {
      dispatch(getCryptoTicker());
    }, 1000);
  }, [dispatch]);

  return (
    <FlipContainer>
      <TopNav />
      <Header>
        <Title>{type} Bitcoin</Title>
      </Header>
      <FlipContent>
        {!crytoRate && !walletData ? (
          <ActivityIndicator animating={true} color={colors.primary} />
        ) : (
          <View style={styles.formContainer}>
            {type === 'Buy' && <BuyBTC {...{ crytoRate, walletData }} />}
            {type === 'Sell' && <SellBTC {...{ crytoRate, walletData }} />}
            {type === 'Receive' && (
              <ReceiveBTC {...{ crytoRate, walletData }} />
            )}
          </View>
        )}
      </FlipContent>
    </FlipContainer>
  );
};

export default BitcoinTrade;
