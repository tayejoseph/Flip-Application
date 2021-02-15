//@flow
import React from 'react';
import { Text } from 'react-native-paper';
import { colors } from '../../constants';

export const currencyLogo = (type: 'Bitcoin' | 'Cedis' | 'Naira'): string => {
  switch (type) {
    case 'Naira':
      return (
        <Text
          style={{
            color: colors.secondary,
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          &#8358;
        </Text>
      );
    case 'Cedis':
      return (
        <Text
          style={{
            color: colors.secondary,
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          &#8373;
        </Text>
      );
    case 'Bitcoin':
      return (
        <Text
          style={{
            color: colors.secondary,
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          &#8383;
        </Text>
      );
    default:
      return '&#8358;';
  }
};
