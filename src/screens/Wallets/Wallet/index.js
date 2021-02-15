// @flow
import { default as React } from 'react';
import { ScrollView, View, Text, StatusBar } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { TopNav, Button } from '../../../components';
import { toMoney } from '../../../helpers';
import { useSelector } from 'react-redux';
import { colors } from '../../../constants';
import { FlipContainer, Header, Title, FlipContent } from '../../../Layout';
import { styles, ButtonsContainer } from './styles';

const Wallet = (): React$Node => {
  const {
    params: { type, currency },
  } = useRoute();
  const { navigate } = useNavigation();
  const walletData = useSelector(state => state.user);

  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
      <FlipContainer hasWaterMark>
        <TopNav />
        <Header>
          <Title>{type} Wallets</Title>
        </Header>
        <FlipContent hasWaterMark>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.balanceTxt}>Balance</Text>
            <Text style={styles.accountTxt}>
              {currency}{' '}
              {walletData && walletData[currency]
                ? toMoney(walletData[currency].balance)
                : toMoney(0)}
            </Text>
            <ButtonsContainer>
              <View style={styles.btnGroup}>
                <Button
                  style={{
                    ...styles.actionBtn,
                    backgroundColor: colors.success,
                  }}
                  borderRadius={10}
                  onPress={() => navigate('Deposit', { currency })}
                >
                  Deposit
                </Button>
                <Button
                  style={{
                    ...styles.actionBtn,
                    backgroundColor: colors.orange,
                  }}
                  borderRadius={10}
                  onPress={() => navigate('Withdrawal', { currency })}
                >
                  Withdraw
                </Button>
              </View>
            </ButtonsContainer>
          </ScrollView>
        </FlipContent>
      </FlipContainer>
    </>
  );
};

export default Wallet;
