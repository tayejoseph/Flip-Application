import React, { useState, useEffect, useMemo } from 'react';
import { View } from 'react-native';
import { Text, ActivityIndicator } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { Picker } from '@react-native-community/picker';
import { colors } from '../../../constants';
import { useRoute } from '@react-navigation/native';
import { getBillCategories } from '../../../store/actions/Bill';
import { TopNav, TextInput, Button } from '../../../components';
import { FlipContainer, FlipContent } from '../../../Layout';
import { initiateBillPayment } from '../../../store/actions/Bill';
import Styles from './styles';

const BillPayment = () => {
  const dispatch = useDispatch();
  const {
    params: { billType, inputTypes },
  } = useRoute();
  const { bills } = useSelector(s => s);
  const [loading, setLoading] = useState(false);
  const [activeBillIndex, setState] = useState(0);
  const [formData, setFormState] = useState({
    referenceCurrency: 'NGN',
    customerNumber: '',
    amount: '',
    itemCode: '',
  });

  const disabled = useMemo(
    () => !formData.customerNumber || activeBillIndex < 0 || loading,
    [formData.customerNumber, activeBillIndex, loading]
  );

  useEffect(() => {
    dispatch(getBillCategories(billType));
  }, [dispatch, billType]);

  const handleSubmit = () => {
    setLoading(true);
    try {
      dispatch(
        initiateBillPayment(billType, {
          ...formData,
          amount: bills[activeBillIndex].amount,
          item_code: bills[activeBillIndex].item_code,
        })
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <FlipContainer>
      <TopNav type={'titleBased'} rightTitle={`${billType} Payment`} />
      <FlipContent style={Styles.contentContainer}>
        {!bills[billType] && (
          <ActivityIndicator animating={true} color={colors.primary} />
        )}
        {bills[billType] && (
          <>
            {inputTypes.map(({ type, label }) => (
              <View key={`${type}${label}`}>
                {type === 'picker' && (
                  <>
                    <Text style={Styles.pickerLabel}>{label}</Text>
                    <View style={Styles.pickerContainer}>
                      <Picker
                        selectedValue={
                          bills[activeBillIndex]
                            ? `${bills[activeBillIndex].biller_name} (₦${bills[activeBillIndex].amount})`
                            : ''
                        }
                        mode={'dropdown'}
                        onValueChange={(itemValue, itemIndex) => {
                          setState(itemIndex);
                        }}
                      >
                        {bills[billType].map(item => (
                          <Picker.Item
                            key={item.biller_name}
                            label={`${item.biller_name} (₦${item.amount})`}
                            value={`${item.biller_name} (₦${item.amount})`}
                          />
                        ))}
                      </Picker>
                    </View>
                  </>
                )}
                {type === 'TextInput' && (
                  <TextInput
                    label={label}
                    value={formData.customerNumber}
                    keyboardType="number-pad"
                    onTextChange={customerNumber =>
                      setFormState(s => ({ ...s, customerNumber }))
                    }
                    placeholder={'12340912321'}
                    style={Styles.textInput}
                  />
                )}
              </View>
            ))}
            <Button
              loading={loading}
              disabled={disabled}
              borderRadius={20}
              onPress={handleSubmit}
            >
              Buy
            </Button>
          </>
        )}
      </FlipContent>
    </FlipContainer>
  );
};

export default BillPayment;
