import React from 'react';
import { Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TopNav } from '../../components';
import Icon from '../../lib/icon';
import { FlipContainer, FlipContent } from '../../Layout';
import { colors } from '../../constants';
import Styles from './styles';

const CardItem = ({ title, onPress, currency, iconName }) => (
  <TouchableRipple onPress={onPress} style={Styles.cardListItem}>
    <>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Icon
            name={iconName}
            size={30}
            color={colors.primary}
            style={{ marginRight: 20 }}
          />
          <Text style={Styles.cardTxt}>Debit Card</Text>
        </View>
        <Text style={Styles.cardTxt}>{currency}</Text>
      </View>
    </>
  </TouchableRipple>
);

const DepositBitCoin = () => {
  const { navigate } = useNavigation();

  const {
    params: { currency },
  } = useRoute();
  return (
    <FlipContainer>
      <TopNav type={'titleBased'} rightTitle={'Select your Card'} />
      <FlipContent style={Styles.contentContainer}>
        <CardItem
          title={'Debit Card'}
          iconName={'wallet-outline'}
          currency={currency}
          onPress={() => navigate('DepositValue', { currency })}
        />
      </FlipContent>
    </FlipContainer>
  );
};

export default DepositBitCoin;
