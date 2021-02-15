//@flow
import React, { useState, useMemo, useEffect } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Text, Checkbox } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { colors } from '../../../constants';
import { isEmail, isValidPassword } from '../../../helpers';
import { handleSignIn } from '../../../store/actions/Auth';
import useAsyncStorage from '../../../hooks/useAsyncStorage';
import { FlipView, Logo, Button, TextInput } from '../../../components';
import styles from './styles';

const SignIn = ({ navigation: { navigate } }): React$Node => {
  const dispatch = useDispatch();
  const { params } = useRoute();
  const [getItem, setItem] = useAsyncStorage();

  const [cleanSlate, setCleanSlate] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [{ email, password }, setFormData] = useState({
    email: params ? params.email : '',
    password: '',
  });
  const [{ emailError, passwordError }, setError] = useState({
    emailError: false,
    passwordError: false,
  });

  const disabled: boolean = useMemo(
    () => loading || !email || emailError || !password || passwordError,
    [loading, email, emailError, password, passwordError]
  );

  useEffect(() => {
    const checkPhoneStatus = async () => {
      try {
        const response = JSON.parse(await getItem('phone'));
        if (!!response) {
          setFormData({ email: response.email, password: '' });
        } else {
          setCleanSlate(true);
        }
      } catch (e) {
        throw e;
      }
    };

    checkPhoneStatus();
  }, []);

  const handleEmail = (email: string) => {
    setFormData({ password, email });
    setError({ emailError: !isEmail(email), passwordError });
  };

  const handlePassword = (password: string) => {
    setFormData({ email, password });
    setError({ emailError, passwordError: !isValidPassword(password) });
  };

  const signin = async () => {
    setLoading(true);
    try {
      const { success } = await dispatch(handleSignIn({ email, password }));
      if (success) {
        await setItem('phone', JSON.stringify({ email, virginity: false }));
        navigate('Home');
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <FlipView style={styles.container}>
      <KeyboardAvoidingView behavior={'position'}>
        <View style={styles.formContainer}>
          <Logo
            type={'logo'}
            scale={1.2}
            style={{
              alignSelf: 'center',
            }}
          />
          <View style={styles.headingContainer}>
            <Text style={styles.header1}>Welcome back!</Text>
            <Text style={styles.header2}>Sign in to your Flip account</Text>
          </View>
          <TextInput
            style={styles.textInput}
            label={'Email address'}
            placeholder={'Email address'}
            value={email}
            textContentType={'emailAddress'}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            onChangeText={handleEmail}
            error={emailError}
          />
          <TextInput
            style={styles.textInput}
            label={'Password'}
            secureTextEntry={!showPassword}
            textContentType={'password'}
            value={password}
            error={passwordError}
            autoCapitalize={'none'}
            onChangeText={handlePassword}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
            {/* <Text style={styles.forgotPassword}>Forgot Password?</Text> */}
          </View>
          <Button
            uppercase={false}
            disabled={disabled}
            loading={loading}
            onPress={signin}
          >
            Sign In
          </Button>
          {cleanSlate && (
            <Text style={styles.newToFlip}>
              New to Flip?{' '}
              <Text
                style={styles.link}
                onPress={() =>
                  navigate('Auth', {
                    screen: 'SignUp',
                  })
                }
              >
                Sign Up
              </Text>
            </Text>
          )}
        </View>
      </KeyboardAvoidingView>
    </FlipView>
  );
};

export default SignIn;
