// @flow
import { default as React } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import styles from './styles';
import { BreadCrumb, CSafeAreaView } from '../../../components';

const TransactionDetails = (): React$Node => {
  const {
    params: { amount, date, status, title, ref },
  } = useRoute();

  return (
    <CSafeAreaView style={{ backgroundColor: '#f8f8f8' }}>
      <BreadCrumb title={'Transaction Details'} />
      <View style={styles.container}>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>{title || 'Received'}</Text>
          <Text style={styles.summaryAmount}>{amount || '2.0001 BTC'}</Text>
        </View>
        <Text style={styles.detailsTitle}>Transaction Details</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.row}>
            <Text style={styles.rowKey}>From</Text>
            <Text style={styles.rowValue}>{'Aro Ayomide'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowKey}>Date</Text>
            <Text style={styles.rowValue}>{date || 'Tue Oct 16'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowKey}>Reference no.</Text>
            <Text style={styles.rowValue}>{ref || '#121341'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowKey}>Amount</Text>
            <Text style={styles.rowValue}>{amount || '2.0001 BTC'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowKey}>Status</Text>
            <Text style={styles.rowValue}>Confirmed</Text>
          </View>
        </View>
      </View>
    </CSafeAreaView>
  );
};

export default TransactionDetails;
