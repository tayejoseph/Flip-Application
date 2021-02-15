import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import Toast from '../../lib/toast';
import { TopNav, Button, TextInput } from '../../components';
import { FlipContainer, FlipContent } from '../../Layout';
import { initializePayment } from '../../store/actions/Wallet';
import Styles from './styles';

const DepositValue = () => {
  const dispatch = useDispatch();
  const [amount, setFormState] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showWebView, setDisplay] = useState(false);
  const [webUrl, setState] = useState('');
  const disabled = useMemo(() => !amount || loading, [amount, loading]);
  const {
    params: { currency },
  } = useRoute();

  const handleInitialPayment = () => {
    setLoading(true);
    try {
      (async () => {
        const { status, data: response } = await dispatch(
          initializePayment({
            amount,
            currency: currency.toLowerCase() === 'naira' ? 'NGN' : 'GHS',
          })
        );
        if (status == 201) {
          setDisplay(true);
          setState(response.data.transaction.fw_paymentLink);
        }
      })();
    } finally {
      setLoading(false);
    }
  };

  const stateChange = e => {
    if (e.title.toLowerCase().includes('approved')) {
      Toast('Transaction Successful', 'success');
    } else if (e.title.toLowerCase().includes('declined')) {
      Toast('Transaction Failed', 'danger');
      setDisplay(false);
    }
  };

  return showWebView ? (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: webUrl }} onNavigationStateChange={stateChange} />
    </View>
  ) : (
    <FlipContainer>
      <TopNav type={'titleBased'} rightTitle={'Deposit Bitcoin'} />
      <FlipContent style={Styles.contentContainer}>
        <TextInput
          label={`Amount (${currency})`}
          style={Styles.txtInput}
          keyboardType={'number-pad'}
          placeholder={''}
          onChangeText={amount => setFormState(amount)}
        />
        <Button
          borderRadius={50}
          onPress={handleInitialPayment}
          loading={loading}
          disabled={disabled}
        >
          <Text>Proceed</Text>
        </Button>
      </FlipContent>
    </FlipContainer>
  );
};

export default DepositValue;
