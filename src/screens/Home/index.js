//@flow
import React, { useState, useEffect, createRef } from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text, useTheme } from 'react-native-paper';
import FundAcionSheet from './FundActionSheet';
import { useNavigation } from '@react-navigation/native';
import BtnWithImage from './BtnWithImage';
import { toMoney } from '../../helpers';
import { FlipContainer, FlipContent } from '../../Layout';
import { TopNav } from '../../components';
import { colors } from '../../constants';
import CoinBtn from './CoinBtn';
import Icon from '../../lib/icon';
import { getWalletDetails } from '../../store/actions/Crypto';
// import { getPaymentDetails } from '../../store/actions/Wallet.js';
import styles, {
  TopIconItemContainer,
  ActionBtnContainer,
  TopIconItem,
} from './styles';

const TopIcon = ({ title, onPress, iconName, IconPosition }): React$Node => (
  <TopIconItemContainer IconPosition={IconPosition} onPress={onPress}>
    <>
      <TopIconItem IconPosition={IconPosition}>
        <Icon name={iconName} color={colors.secondary} size={18} />
      </TopIconItem>
      <Text style={styles.topIconTxt}>{title}</Text>
    </>
  </TopIconItemContainer>
);

const actionSheetRef = createRef();

const Home = (): React$Node => {
  const dispatch = useDispatch();
  const { walletData } = useSelector(s => s.user);
  const { colors } = useTheme<colorOptions>();
  const { navigate } = useNavigation();
  const [activeCoin, setActiveCoin] = useState('GHS');

  useEffect(() => {
    dispatch(getWalletDetails());
    // dispatch(getPaymentDetails());
  }, [dispatch]);

  return (
    <FlipContainer hasWaterMark>
      <FundAcionSheet ref={actionSheetRef} />
      <TopNav
        left={() => (
          <TopIcon
            title="Profile"
            iconName={'person-circle'}
            onPress={() => navigate('Profile')}
          />
        )}
        right={() => (
          <TopIcon
            title="Fund Wallets"
            iconName={'add-circle'}
            IconPosition={'left'}
            onPress={() => actionSheetRef.current.open()}
          />
        )}
      />
      <View style={styles.transactionStatementContainer}>
        <Text style={styles.lgTxt}>
          {walletData && walletData[activeCoin]
            ? toMoney(walletData[activeCoin].balance)
            : toMoney(0)}
        </Text>
        <Text style={styles.smTxt}>Wallet Balance</Text>
        <View style={{ flexDirection: 'row', marginTop: '5%' }}>
          <CoinBtn
            title="NGN"
            active={activeCoin === 'NGN'}
            onPress={() => setActiveCoin('NGN')}
          />
          <CoinBtn
            title="GHS"
            middle={true}
            active={activeCoin === 'GHS'}
            onPress={() => setActiveCoin('GHS')}
          />
          <CoinBtn
            title="BTC"
            active={activeCoin === 'BTC'}
            onPress={() => setActiveCoin('BTC')}
          />
        </View>
      </View>

      <FlipContent hasWaterMark>
        <View style={styles.transactionBtnCover}>
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              marginBottom: '5%',
            }}
          >
            <View
              style={styles.transactBtn}
              onPress={() => navigate('Bitcoin', { type: 'Sell' })}
            >
              <>
                <Icon
                  name="arrow-back-circle"
                  size={38}
                  color={colors.success}
                />
                <Text>Buy</Text>
              </>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              flex: 1,
            }}
          >
            <View
              style={styles.transactBtn}
              onPress={() => navigate('Bitcoin')}
            >
              <>
                <Icon
                  name="arrow-forward-circle"
                  size={38}
                  color={colors.danger}
                />
                <Text>Sell</Text>
              </>
            </View>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.activeBtnCover}>
          <ActionBtnContainer borderDirection={'right'}>
            <BtnWithImage
              iconName={'logo-bitcoin'}
              iconColor={'#ffff'}
              iconBgColor={'#E1A91F'}
              title={'Bitcoin'}
              onPress={() => navigate('Bitcoin', { type: 'Buy' })}
            />
            <BtnWithImage
              iconName={'card-outline'}
              title={'Gift Card'}
              onPress={() => navigate('GiftCards', { type: 'Buy' })}
            />
            <BtnWithImage
              iconName={'call-outline'}
              title={'Airtime'}
              onPress={() => navigate('AirTimeAndData', { type: 'Airtime' })}
            />
            <BtnWithImage
              iconName={'globe-outline'}
              iconColor={'black'}
              title={'Data'}
              onPress={() => navigate('DataBill', { type: 'Data' })}
            />
            <BtnWithImage
              iconName={'globe-outline'}
              iconColor={'black'}
              title={'Bills'}
              onPress={() => navigate('BillPaymentLists')}
            />
          </ActionBtnContainer>
          <ActionBtnContainer borderDirection={'left'}>
            <BtnWithImage
              iconName={'logo-bitcoin'}
              iconColor={'#ffff'}
              iconBgColor={'#E1A91F'}
              title={'Bitcoin'}
              onPress={() => navigate('Bitcoin', { type: 'Sell' })}
            />
            <BtnWithImage
              iconName={'card-outline'}
              title={'Gift Card'}
              onPress={() => navigate('GiftCards', { type: 'Sell' })}
            />
          </ActionBtnContainer>
        </ScrollView>
      </FlipContent>
    </FlipContainer>
  );
};

export default Home;
