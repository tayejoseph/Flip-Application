//@flow
import { default as React, useMemo } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableRipple } from 'react-native-paper';

import styles from './styles';

interface Props {
  status: string;
  title?: string;
  amount?: string;
  date?: Date;
}

const TransactionItem = ({
  status,
  title,
  amount,
  date,
}: Props): React$Node => {
  const { navigate } = useNavigation();

  const backgroundColor = useMemo(() => {
    switch (status) {
      case 'success':
        return '#f1fff1';
      case 'pending':
        return 'yellow';
      case 'error':
        return '#fddfde';
      default:
        return '#f1fff1';
    }
  }, [status]);

  return (
    <TouchableRipple
      style={styles.container}
      onPress={() =>
        navigate('TransactionDetails', {
          status,
          title,
          amount,
          date,
        })
      }
    >
      <>
        <View
          style={{
            ...styles.transactionIconContainer,
            backgroundColor,
          }}
        />
        <View style={styles.transactionDetails}>
          <Text style={styles.type}>{title || 'Bought Bitcoin'}</Text>
          <Text style={styles.value}>{amount || '$290.21'}</Text>
        </View>
        <View style={styles.transactionFurtherDetails}>
          <Text style={styles.amount}>-0.75 BTC</Text>
          <Text style={styles.date}>{date || '12 Mar 2020'}</Text>
        </View>
      </>
    </TouchableRipple>
  );
};

export default TransactionItem;
