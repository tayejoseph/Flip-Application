// @flow
import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../Home/styles';
import { getTransactionHistory } from '../../store/actions/Wallet';
import TransactionItem from '../Home/Transactions/Item';
import { BreadCrumb } from '../../components';
import { colors } from '../../constants';

const TransactionHistory = (): React$Node => {
  const dispatch = useDispatch();
  const { transactionHistory } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getTransactionHistory());
  }, [dispatch]);

  return (
    <>
      <BreadCrumb
        title={'Transaction History'}
        style={{ backgroundColor: colors.secondary }}
      />
      {transactionHistory === '' ? (
        <View style={{ paddingTop: 20 }}>
          <ActivityIndicator color={colors.primary} animation={true} />
        </View>
      ) : (
        <ScrollView
          style={{ ...styles.historyCardsContainer, paddingHorizontal: 8 }}
        >
          <>
            {transactionHistory && transactionHistory.length === 0 && (
              <View style={{ paddingTop: 50, alignItems: 'center' }}>
                <Text style={{ color: 'grey' }}>No transaction yet</Text>
              </View>
            )}
            {transactionHistory &&
              transactionHistory.length > 0 &&
              transactionHistory.map(item => (
                <TransactionItem key={item.id} {...item} status={'success'} />
              ))}
          </>
        </ScrollView>
      )}
    </>
  );
};

export default TransactionHistory;
