///@flow
import { default as React } from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { FlipContainer, Header, Title, FlipContent } from '../../Layout';
import { toMoney } from '../../helpers';
import styles from './styles';
import WalletCard from './WalletCard';
import { TopNav } from '../../components';

const Wallets = (): React$Node => {
  const walletData = useSelector(state => state.user);
  return (
    <FlipContainer hasWaterMark>
      <TopNav />
      <Header>
        <Title>Wallets</Title>
      </Header>
      <FlipContent>
        <ScrollView style={styles.scrollView}>
          <WalletCard
            type={'Naira'}
            balance={
              walletData && walletData.NGN
                ? toMoney(walletData.NGN.balance)
                : toMoney(0)
            }
          />
          <WalletCard
            type={'Cedis'}
            balance={
              walletData && walletData.NGN
                ? toMoney(walletData.GHS.balance)
                : toMoney(0)
            }
          />
          <WalletCard
            type={'Bitcoin'}
            balance={
              walletData && walletData.BTC
                ? toMoney(walletData.NGN.balance)
                : toMoney(0)
            }
          />
        </ScrollView>
      </FlipContent>
    </FlipContainer>
  );
};

export default Wallets;
