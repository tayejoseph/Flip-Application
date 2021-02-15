//@flow
import React, { useState, useMemo } from 'react';
import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Text, Checkbox } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { colors } from '../../../constants';
import useAsyncStorage from '../../../hooks/useAsyncStorage';
import { handleSignUp } from '../../../store/actions/Auth';
import { isEmail, isValidPassword, checkForFullName } from '../../../helpers';
import styles from './styles';
import { FlipView, Logo, Button, TextInput } from '../../../components';

const isValidInput = (value, inputName) => {
  switch (inputName) {
    case 'email':
      return isEmail(value);
    case 'password':
      return isValidPassword(value);
    case 'fullName':
      return checkForFullName(value);
    default:
      break;
  }
};
const SignUp = ({ navigation }): React$Node => {
  const { navigate } = navigation;
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [{ email, password, fullName, referalCode }, setFormState] = useState({
    email: '',
    password: '',
    fullName: '',
    referalCode: '',
  });

  const [{ emailError, passwordError, fullNameError }, setFormError] = useState(
    {
      emailError: false,
      passwordError: false,
      fullNameError: false,
    }
  );

  const [, setItem] = useAsyncStorage();

  const handleInput = (value: string, inputName: string) => {
    setFormState(s => ({
      ...s,
      [inputName]: value,
    }));
    setFormError(s => ({
      ...s,
      [`${inputName}Error`]: !isValidInput(value, inputName),
    }));
  };

  const disabled: boolean = useMemo(
    () => loading || !email || emailError || !password || passwordError,
    [loading, email, emailError, password, passwordError]
  );

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await dispatch(
        handleSignUp({
          email,
          password,
          fullName: fullName.split(' '),
          referalCode,
        })
      );

      if (response && response.status === '201') {
        navigation.navigate('Home');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <FlipView style={styles.container}>
      <View style={styles.formContainer}>
        {/* <KeyboardAvoidingView behavior={'position'}> */}
        {/* <Logo
            type={'logo'}
            scale={1}
            style={{
              alignSelf: 'center',
            }}
          /> */}
        <View style={styles.headingContainer}>
          <Text style={styles.header1}>Let's get started!</Text>
          <Text style={styles.header2}>
            Create your Flip account in seconds!
          </Text>
        </View>
        <ScrollView>
          <TextInput
            style={styles.textInput}
            placeholder={'Full Name'}
            label={'Full Name'}
            value={fullName}
            onChangeText={fullName => handleInput(fullName, 'fullName')}
            error={fullNameError}
          />
          {/* <TextInput
            style={styles.textInput}
            placeholder={'Referal Code'}
            label={'Referal Code'}
            value={referalCode}
            onChangeText={referalCode =>
              handleInput(referalCode, 'referalCode')
            }
          /> */}
          <TextInput
            style={styles.textInput}
            placeholder={'Email address'}
            label={'Email address'}
            value={email}
            textContentType={'emailAddress'}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            onChangeText={email => handleInput(email, 'email')}
            error={emailError}
          />
          <TextInput
            style={styles.textInput}
            placeholder={'Password'}
            label={'Password'}
            secureTextEntry={!showPassword}
            textContentType={'password'}
            onChangeText={password => handleInput(password, 'password')}
            keyboardType={'default'}
            error={passwordError}
            autoCapitalize={'none'}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
              marginLeft: -8,
            }}
          >
            <Checkbox
              status={showPassword ? 'checked' : 'unchecked'}
              color={colors.primary}
              onPress={() => {
                setShowPassword(!showPassword);
              }}
            />
            <Text
              style={{ color: colors.primary }}
              onPress={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? 'Hide' : 'Show'} Password
            </Text>
          </View>
          <Text
            style={{ ...styles.newToFlip, marginBottom: 16, marginTop: -2 }}
          >
            By proceeding, you agree to Flip's{' '}
            <Text style={styles.link} onPress={console.log}>
              T & C
            </Text>
          </Text>
          <Button
            uppercase={false}
            onPress={() => signUp()}
            loading={loading}
            disabled={disabled}
            label={'Sign Up to Flip'}
          >
            Sign Up
          </Button>
          <Text style={styles.newToFlip}>
            Already have a Flip account?{' '}
            <Text
              style={styles.link}
              onPress={() =>
                navigate('Auth', {
                  screen: 'SignIn',
                })
              }
            >
              Sign In
            </Text>
          </Text>
        </ScrollView>
        {/* </KeyboardAvoidingView> */}
      </View>
    </FlipView>
  );
};

export default SignUp;
