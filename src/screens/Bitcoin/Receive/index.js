// @flow
import * as React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from '../../../lib/icon';
import { colors } from '../../../constants';
import styles from './styles';

const SellBTC = (): React$Node => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/BarCode.png')}
        style={styles.img}
      />
      <View style={styles.bitCoinAddressContainer}>
        <Text style={styles.bitCoinAddress}>2382uk34h34jw8sdjk8ejk4429232</Text>
      </View>
      <Icon name="copy-outline" size={34} color={colors.primary} />
    </View>
  );
};

export default SellBTC;
