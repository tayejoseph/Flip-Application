// @flow
import { default as React, useState, useMemo } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { RadioButton, TouchableRipple } from 'react-native-paper';
import { TextInput, Button } from '../../../components';
import Icon from '../../../lib/icon';
import styles, { Label } from './styles';
import { toMoney } from '../../../helpers';
import { colors } from '../../../constants';
import { initiateBuyBitCoin } from '../../../store/actions/Wallet';

const BuyBTC = ({ crytoRate, walletData }): React$Node => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [amount, setFormData] = useState(0);
  const [currency, setCurrency] = useState('naira');
  const disabled = useMemo(() => !amount || loading, [amount, loading]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { status, data: response } = await dispatch(
        initiateBuyBitCoin({
          referenceCurrency: currency === 'naira' ? 'NGN' : 'GHS',
          amount,
        })
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 30,
          borderWidth: 2,
          justifyContent: 'center',
          borderRadius: 50,
          borderColor: colors.primary,
          paddingVertical: 15,
        }}
      >
        <Text style={{ color: colors.primary, fontWeight: 'bold' }}>
          1BTC ~ {crytoRate && crytoRate.btcngn && crytoRate.btcngn.buy}NGN
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}
      >
        <Text style={{ color: '#222222', fontSize: 16 }}>
          BTC Wallet Balance
        </Text>
        <Text style={{ color: '#222222', fontSize: 16 }}>
          {walletData && walletData.BTC
            ? toMoney(walletData.BTC.balance)
            : toMoney(0)}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 30,
        }}
      >
        <Text style={{ color: '#222222', fontSize: 16 }}>
          {currency.charAt(0).toUpperCase() + currency.slice(1)} Balance
        </Text>
        <Text style={{ color: '#222222', fontSize: 16 }}>
          {toMoney(walletData[currency === 'naira' ? 'NGN' : 'GHS'].balance)}
        </Text>
      </View>
      <Text style={{ color: '#222222', opacity: 0.7 }}>From</Text>
      <View style={{ marginBottom: 20 }}>
        <RadioButton.Group onValueChange={setCurrency} value={currency}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.radioContainer}>
              <RadioButton value="naira" color={colors.primary} />
              <Label onPress={() => setCurrency('naira')}>Naira Wallet</Label>
            </View>
            <View style={styles.radioContainer}>
              <RadioButton value="cadis" color={colors.primary} />
              <Label onPress={() => setCurrency('cadis')}>Cedis Wallet</Label>
            </View>
          </View>
        </RadioButton.Group>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
          <TextInput
            style={{ borderWidth: 0 }}
            label={'Amount (BTC)'}
            labelStyle={{ color: '#a4a4a4', fontWeight: '600' }}
            placeholder={'0.0001 BTC'}
            keyboardType={'number-pad'}
            onChangeText={amount => setFormData(amount)}
          />
        </View>
        <TouchableRipple onPress={console.log}>
          <Icon
            size={20}
            name={'swap-vertical-outline'}
            color={'black'}
            style={styles.toggleViewBtn}
          />
        </TouchableRipple>
      </View>
      <View style={{ marginTop: 24 }}>
        <Button
          borderRadius={10}
          uppercase
          onPress={handleSubmit}
          loading={loading}
          disabled={disabled}
        >
          Buy
        </Button>
      </View>
    </ScrollView>
  );
};

export default BuyBTC;
