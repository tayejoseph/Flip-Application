//@flow
import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableRipple } from 'react-native-paper';

import styles from './styles';
import { colors } from '../../../constants';
import { currencyLogo } from '../../../helpers';

interface Props {
  type: 'Naira' | 'Bitcoin' | 'Cedis';
  balance: string | number;
}

const WalletCard = ({ type, balance }: Props): React$Node => {
  const { navigate } = useNavigation();

  const currency = (): string => {
    switch (type) {
      case 'Naira':
        return 'NGN';
      case 'Cedis':
        return 'GHS';
      case 'Bitcoin':
        return 'BTC';
      default:
        return 'NGN';
    }
  };

  const color = () => {
    switch (type) {
      case 'Naira':
        return {
          main: '#008000',
          background: colors.primary,
        };
      case 'Cedis':
        return {
          main: '#f1870f',
          background: colors.primary,
        };
      case 'Bitcoin':
        return {
          main: '#E1A91F',
          background: colors.primary,
        };
      default:
        return {
          main: '#008000',
          background: colors.primary,
        };
    }
  };

  return (
    <TouchableRipple
      style={{ ...styles.container, backgroundColor: color().background }}
      onPress={() =>
        navigate('Wallet', {
          type,
          currency: currency(),
        })
      }
    >
      <>
        <View style={{ ...styles.currency, backgroundColor: color().main }}>
          <Text
            style={{
              color: colors.secondary,
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            {currencyLogo(type)}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.currencyTitle}>{type || 'Naira'} Wallet</Text>
          <Text style={styles.walletBalance}>
            {currency()} {balance || 0.0}
          </Text>
        </View>
      </>
    </TouchableRipple>
  );
};

export default WalletCard;
