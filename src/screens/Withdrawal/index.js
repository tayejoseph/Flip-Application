import React, { useState, useEffect, useMemo } from 'react';
import { View } from 'react-native';
import { Text, ActivityIndicator } from 'react-native-paper';
import { handleGetBankAccs } from '../../store/actions/Banking';
import { useSelector, useDispatch } from 'react-redux';
import { Picker } from '@react-native-community/picker';
import { useRoute, useNavigation } from '@react-navigation/native';
import { colors } from '../../constants';
import { TopNav, Button, TextInput } from '../../components';
import { FlipContainer, FlipContent } from '../../Layout';
import { initiateWithDrawal } from '../../store/actions/Wallet';
import Styles from './styles';

const WithDraw = () => {
  const { accountData } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const {
    params: { currency },
  } = useRoute();
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(false);
  const [{ amount, accountIndex }, setFormState] = useState({
    amount: 0,
    accountIndex: 0,
  });

  const disabled = useMemo(
    () => loading || amount === 0 || !amount || accountIndex < 0,
    [loading, amount, accountIndex]
  );

  useEffect(() => {
    dispatch(handleGetBankAccs());
  }, [dispatch]);

  const handleWithDrawal = async () => {
    setLoading(true);
    try {
      const { status, data: response } = await dispatch(
        initiateWithDrawal({
          amount,
          bankAccountId: accountData[accountIndex].id,
          currency,
        })
      );
      // I still need to show a success and navigate back here
    } finally {
      setLoading(false);
    }
  };

  return (
    <FlipContainer>
      <TopNav
        type={'titleBased'}
        rightTitle={`Withdraw from your ${currency} Wallet`}
      />
      <FlipContent style={Styles.contentContainer}>
        {accountData === '' && (
          <ActivityIndicator animated={true} color={colors.primary} />
        )}
        {accountData && accountData.length > 0 ? (
          <>
            <Text style={{ color: colors.primary }}>Select Your Account</Text>
            <View style={Styles.pickerContainer}>
              <Picker
                selectedValue={''}
                mode={'dropdown'}
                onValueChange={(itemValue, itemIndex) =>
                  setFormState(s => ({
                    ...s,
                    accountIndex: itemValue,
                  }))
                }
              >
                {accountData.map((item, index) => (
                  <Picker.Item
                    key={item.id}
                    label={`${item.accountName} (${item.bankName})`}
                    value={index}
                  />
                ))}
              </Picker>
            </View>
            <View style={{ marginTop: 20 }}>
              <TextInput
                style={Styles.textInput}
                label={`Amount (${currency})`}
                placeholder={''}
                onChangeText={amount => setFormState(s => ({ ...s, amount }))}
              />
            </View>
            <Button
              borderRadius={10}
              disabled={disabled}
              loading={loading}
              style={Styles.button}
              onPress={handleWithDrawal}
            >
              <Text>Withdraw</Text>
            </Button>
          </>
        ) : (
          <View style={{ flex: 1, paddingTop: '10%', alignItems: 'center' }}>
            <Text>You don't have an account listed yet</Text>
          </View>
        )}
        {accountData && (
          <Button
            borderRadius={10}
            mode={accountData && accountData.length === 0 ? 'outlined' : 'text'}
            disabled={loading}
            onPress={() => navigate('Account')}
          >
            <Text>Add Account</Text>
          </Button>
        )}
      </FlipContent>
    </FlipContainer>
  );
};

export default WithDraw;
