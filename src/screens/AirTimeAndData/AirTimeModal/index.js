import React from 'react';
import { View } from 'react-native';
import { Text, Dialog, Portal } from 'react-native-paper';
import { Button, TextInput } from '../../../components';
import Styles from './styles';

const AirTime = ({
  showModal,
  hideModal,
  formData,
  currency,
  errors,
  setErrors,
  loading,
  disabled,
  setFormState,
  handleSubmit,
}) => {
  return (
    <Portal>
      <Dialog
        visible={showModal}
        dismissable={true}
        onDismiss={hideModal}
        style={{
          backgroundColor: '#fff',
          borderRadius: 10,
        }}
      >
        <Dialog.Content>
          <Text style={Styles.title}>MTN Air time purchase</Text>
          <TextInput
            label={`Phone Number (${currency})`}
            keyboardType={'number-pad'}
            placeholder={''}
            style={Styles.txtInput}
            error={errors.phoneError}
            onChangeText={customerNumber => {
              setFormState(s => ({
                ...s,
                customerNumber,
              }));
              setErrors(s => ({
                ...s,
                phoneError: customerNumber.length !== 11,
              }));
            }}
          />
          <TextInput
            label={'Amount'}
            placeholder={''}
            keyboardType={'number-pad'}
            error={errors.amount}
            onChangeText={amount => {
              setFormState(s => ({
                ...s,
                amount,
              }));
              setErrors(s => ({
                ...s,
                amountError: !amount,
              }));
            }}
          />
          <Button
            style={Styles.btn}
            borderRadius={10}
            loading={loading}
            disabled={disabled}
            onPress={handleSubmit}
          >
            <Text>Buy</Text>
          </Button>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default AirTime;
