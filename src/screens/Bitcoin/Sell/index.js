// @flow
import React, { useState, useMemo } from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { RadioButton, Text } from 'react-native-paper';
import styles, { Label } from './styles';
import { toMoney } from '../../../helpers';
import { colors } from '../../../constants';
import { Button, TextInput } from '../../../components';
import { initialSellBitCoin } from '../../../store/actions/Wallet';

const SellBTC = ({ crytoRate, walletData }): React$Node => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [{ amount, currency }, setState] = useState({
    amount: 0,
    currency: 'NGN',
  });

  const disabled = useMemo(() => loading || !amount || !currency, [
    loading,
    currency,
    amount,
  ]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { status, data: response } = await dispatch(
        initialSellBitCoin({
          referenceCurrency: currency,
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
      <View>
        <Text style={styles.txt}>BTC wallet balance</Text>
        <Text style={{ ...styles.txt, ...styles.txtBold }}>
          {walletData && walletData.BTC
            ? toMoney(walletData.BTC.balance)
            : toMoney(0)}
          BTC
        </Text>
      </View>
      <View style={{ marginVertical: 20, marginTop: 30 }}>
        <Text style={{ fontSize: 16 }}>Select Deposit Wallet</Text>

        <View>
          <RadioButton.Group
            onValueChange={currency => {
              setState(s => ({ ...s, currency }));
            }}
            value={currency}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View style={styles.radioContainer}>
                <RadioButton value="NGN" color={colors.primary} />
                <Label
                  onPress={() => setState(s => ({ ...s, currency: 'NGN' }))}
                >
                  Nigerian Wallet
                </Label>
              </View>
              <View style={styles.radioContainer}>
                <RadioButton value="GHS" color={colors.primary} />
                <Label
                  onPress={() => setState(s => ({ ...s, currency: 'GHS' }))}
                >
                  Ghanian Wallet
                </Label>
              </View>
            </View>
          </RadioButton.Group>
        </View>
      </View>
      <View>
        <TextInput
          style={{ borderWidth: 0 }}
          label={'Amount (BTC)'}
          labelStyle={styles.txtInputLabel}
          placeholder={'0.00'}
          onChangeText={amount => setState(s => ({ ...s, amount }))}
        />
      </View>
      <View style={{ marginTop: 35 }}>
        <Button
          borderRadius={10}
          uppercase
          loading={loading}
          disabled={disabled}
          onPress={handleSubmit}
        >
          Sell
        </Button>
      </View>
    </ScrollView>
  );
};

export default SellBTC;
