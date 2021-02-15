import React, { useState } from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TopNav, Button, TextInput } from '../../components';
import { FlipContainer, FlipContent } from '../../Layout';
import Styles from './styles';

const FundWallet = () => {
  const {
    params: { currency },
  } = useRoute();
  const [formData, setFormState] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });
  return (
    <FlipContainer>
      <TopNav type={'titleBased'} rightTitle={`Fund your ${currency} Wallet`} />
      <FlipContent style={Styles.contentContainer}>
        <TextInput
          style={{ ...Styles.textInput }}
          label={'Amount'}
          placeholder={'Enter the Amount'}
          onChangeText={firstName => setFormState(s => ({ ...s, firstName }))}
        />
        <Button borderRadius={10} style={Styles.button}>
          <Text>Proceed</Text>
        </Button>
      </FlipContent>
    </FlipContainer>
  );
};

export default FundWallet;
