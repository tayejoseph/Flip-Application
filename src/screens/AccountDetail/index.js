import React, { useState, useMemo, useEffect, createRef } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RadioButton, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import BankListsActionSheet from './BankListActionSheet';
import { colors } from '../../constants';
import { TopNav, Button, TextInput } from '../../components';
import { FlipContainer, FlipContent } from '../../Layout';
import { AddBankAccount, DeleteAccount } from '../../store/actions/Banking';
import {
  getBankByCountry,
  validateAccNumber,
} from '../../store/actions/General';
import Styles, { Label } from './styles';

const actionSheetRef = createRef();

const AccountDetail = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { bankLists, accountData } = useSelector(s => ({
    ...s.general,
    ...s.user,
  }));
  const [loading, setLoading] = useState(false);
  const [{ verifying }, setVerifyState] = useState({
    verifying: false,
  });
  const [accNoError, setError] = useState(false);
  const {
    params: { actionType, accountNumber },
  } = useRoute();
  const [formData, setFormState] = useState(() => {
    if (actionType === 'edit' && accountNumber) {
      return accountData.filter(
        data => data.accountNumber === accountNumber
      )[0];
    } else {
      return {
        accountNumber: '',
        accountName: '',
        bankCode: '',
        bankId: '',
        bankName: '',
        currency: 'NGN',
        bankBranchCode: '',
        bankBranchName: '',
      };
    }
  });

  useEffect(() => {
    dispatch(getBankByCountry());
  }, [dispatch]);

  useEffect(() => {
    if (formData.bankName && !accNoError) {
      setLoading(true);

      try {
        setVerifyState(s => ({
          ...s,
          verifying: true,
        }));
        validateAccNumber({
          accountNumber: formData.accountNumber,
          bankCode: formData.bankCode,
        })
          .then(({ status, data: response }) => {
            if (status === 200) {
              setFormState(s => ({
                ...s,
                accountName: response.data.bankDetails.accountName,
              }));
            }
          })
          .catch(({ error }) => {});
      } finally {
        setVerifyState(s => ({ verifying: false }));
        setLoading(false);
      }
    }
  }, [accNoError, formData]);

  const handleSubmit = async () => {
    setLoading('save');
    try {
      const response = await dispatch(AddBankAccount(formData));
      if (response && response.code === 201) {
        navigation.goBack();
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAcc = () => async () => {
    setLoading('delete');
    try {
      const response = await dispatch(DeleteAccount(formData));
      if (response.success) navigation.goBack();
    } finally {
      setLoading(false);
    }
  };

  const disabled = useMemo(
    () =>
      !formData.accountNumber ||
      !formData.bankCode ||
      !formData.bankName ||
      loading ||
      verifying,
    [formData, loading, verifying]
  );

  return (
    <FlipContainer>
      <TopNav type={'titleBased'} rightTitle={'Account Setup'} />
      <BankListsActionSheet
        ref={actionSheetRef}
        bankLists={bankLists[formData.currency]}
        setFormState={setFormState}
      />
      <FlipContent style={Styles.contentContainer}>
        <View style={{ marginBottom: 20 }}>
          <RadioButton.Group
            onValueChange={currency => {
              setFormState(s => ({ ...s, currency }));
            }}
            value={formData.currency}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View style={Styles.radioContainer}>
                <RadioButton value="NGN" color={colors.primary} />
                <Label
                  onPress={() => setFormState(s => ({ ...s, currency: 'NGN' }))}
                >
                  Nigerian Account
                </Label>
              </View>
              <View style={Styles.radioContainer}>
                <RadioButton value="GHS" color={colors.primary} />
                <Label
                  onPress={() => setFormState(s => ({ ...s, currency: 'GHS' }))}
                >
                  Ghanian Account
                </Label>
              </View>
            </View>
          </RadioButton.Group>
        </View>
        <Text
          onPress={() => actionSheetRef.current.open()}
          style={Styles.bankName}
        >
          {formData.bankName ? formData.bankName : 'Bank Name'}
        </Text>
        <TextInput
          style={Styles.textInput}
          keyboardType={'number-pad'}
          value={formData.accountNumber}
          // maxLength={10}
          placeholder={'Enter Account Number'}
          error={accNoError}
          editable={!verifying}
          onChangeText={accountNumber => {
            setFormState(s => ({ ...s, accountNumber }));
            setError(accountNumber.length < 10);
          }}
        />
        <TextInput
          style={Styles.textInput}
          value={formData.accountName}
          placeholder={'Account Name'}
        />
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          {actionType === 'edit' && (
            <View style={{ flex: 1, marginRight: 10 }}>
              <Button
                label={'Delete'}
                borderRadius={10}
                loading={loading === 'delete' || verifying}
                onPress={handleDeleteAcc}
                style={{ borderRadius: 30 }}
                disabled={disabled}
              >
                Delete
              </Button>
            </View>
          )}
          <View style={{ flex: 1 }}>
            <Button
              label={'Send Money'}
              borderRadius={10}
              loading={loading === 'save' || verifying}
              onPress={handleSubmit}
              style={{
                borderRadius: 30,
                marginLeft: actionType === 'edit' ? 10 : 0,
              }}
              disabled={disabled}
            >
              {verifying && !formData.accountName
                ? 'verifying'
                : !verifying && !formData.accountName
                ? 'verify'
                : 'Save Account'}
            </Button>
          </View>
        </View>
      </FlipContent>
    </FlipContainer>
  );
};

export default AccountDetail;
