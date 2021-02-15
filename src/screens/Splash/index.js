//@flow
import { default as React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Toast from '../../lib/toast';
import AsyncStorage from '@react-native-community/async-storage';
import { View, StatusBar, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { LoginSuccess } from '../../store/actions/Auth';
import useAsyncStorage from '../../hooks/useAsyncStorage';
import { WaterMark, Logo } from '../../components';

const Splash = ({ navigation }): React$Node => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [getItem] = useAsyncStorage();
  const { navigate } = navigation;

  useEffect(() => {
    const checkPhoneStatus = async () => {
      try {
        const response = JSON.parse(await getItem('phone'));
        if (!!response) {
          AsyncStorage.multiGet(['user', 'token']).then(value => {
            if (value) {
              const [user, token] = value;
              dispatch(
                LoginSuccess({
                  user: JSON.parse(user[1]),
                  token: token[1],
                })
              );
              navigate('Home');
              Toast('Welcome Back', 'success');
            }
          });
        } else {
          navigate('Auth', { screen: 'SignIn' });
        }
      } catch (e) {
        throw e;
      }
    };

    checkPhoneStatus();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
      <View
        style={{
          ...styles.Splash,
          backgroundColor: colors.primary,
        }}
      >
        <Logo />
        <WaterMark />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Splash: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 30,
  },
});

export default Splash;
