import React, { useState, useEffect, useMemo } from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-community/picker';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator, Text } from 'react-native-paper';
import { colors } from '../../../constants';
import { TopNav, Button, TextInput } from '../../../components';
import {
  getBillCategories,
  initiateBillPayment,
} from '../../../store/actions/Bill';
import { FlipContainer, FlipContent } from '../../../Layout';
import Styles from './styles';

const BuyData = () => {
  const {
    params: { network, type },
  } = useRoute();
  const dispatch = useDispatch();
  const { bills } = useSelector(s => s);
  const [customerNumber, setFormData] = useState('');
  const [activePlanIndex, setState] = useState('');
  const [loading, setLoading] = useState(false);
  const [{ numberError }, setError] = useState({
    numberError: true,
  });
  const disabled = useMemo(
    () => loading || !customerNumber || !activePlanIndex,
    [loading, activePlanIndex, customerNumber]
  );

  useEffect(() => {
    dispatch(getBillCategories(`${type}-${network}`));
  }, [dispatch, network, type]);

  const handleBuyData = async () => {
    setLoading(true);
    try {
      const { amount, itemCode } = bills[`data-${network}`][activePlanIndex];
      dispatch(
        initiateBillPayment(`data-${network}`, {
          referenceCurrency: 'NGN',
          customerNumber: `+234${customerNumber.slice(1)}`,
          amount: amount,
          itemCode,
        })
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <FlipContainer>
      <TopNav
        type={'titleBased'}
        rightTitle={type === 'data' ? `Select Your Plan` : 'Buy Your Airtime'}
      />
      <FlipContent style={Styles.contentContainer}>
        {type === 'data' &&
          (!bills[`data-${network}`] ? (
            <ActivityIndicator animating={true} color={colors.primary} />
          ) : (
            <View>
              <TextInput
                style={Styles.textInput}
                label={'Enter Phone Number (NGN  +234)'}
                placeholder={''}
                value={customerNumber}
                error={numberError}
                keyboardType={'number-pad'}
                onChangeText={customerNumber => {
                  setFormData(customerNumber);
                  setError(s => ({
                    ...s,
                    setError: !customerNumber.length === 1,
                  }));
                }}
              />
              <View>
                <Text style={{ color: colors.primary, marginBottom: 6 }}>
                  Select Your Data Plan
                </Text>
                <View style={Styles.pickerContainer}>
                  <Picker
                    placeholder="sdsdldk"
                    selectedValue={
                      activePlanIndex
                        ? bills[`data-${network}`][activePlanIndex].biller_name
                        : ''
                    }
                    mode={'dropdown'}
                    style={{ height: 50 }}
                    onValueChange={(itemValue, itemIndex) => {
                      setState(itemIndex);
                    }}
                  >
                    <Picker.Item label={'Select Your Data Plan'} value={''} />
                    {bills[`data-${network}`].map(item => (
                      <Picker.Item
                        label={`${item.biller_name} (₦${item.amount})`}
                        value={item.biller_name}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
              <Button
                onPress={handleBuyData}
                borderRadius={30}
                style={{ marginTop: 20 }}
                disabled={disabled}
                loading={loading}
              >
                Buy Data
              </Button>
            </View>
          ))}
        {type === 'airtime' && <Text>AireTome</Text>}
      </FlipContent>
    </FlipContainer>
  );
};

export default BuyData;
