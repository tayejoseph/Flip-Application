import React, { useEffect } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Text, TouchableRipple, ActivityIndicator } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../constants';
import { capitalize } from '../../helpers';
import { FlipContainer, Header, Title, FlipContent } from '../../Layout';
import { getAllGiftCards } from '../../store/actions/GiftCards';
import { TopNav } from '../../components';
import styles from './styles';

const giftCardImgs = {
  amazon: require('../../assets/images/amazon.png'),
  ebay: require('../../assets/images/ebay.png'),
  ['google-play']: require('../../assets/images/googlePlay.png'),
  itunes: require('../../assets/images/itunes.jpg'),
  nike: require('../../assets/images/nike.png'),
  nordstrom: require('../../assets/images/nordstorm.png'),
  sephora: require('../../assets/images/sephora.png'),
  steam: require('../../assets/images/steam.png'),
  visa: require('../../assets/images/visa.png'),
};
const GiftCards = () => {
  const { navigate } = useNavigation();
  const { giftCards } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGiftCards());
  }, [dispatch]);

  return (
    <FlipContainer>
      <TopNav />
      <Header>
        <Title>Gift Cards</Title>
      </Header>
      <FlipContent>
        {giftCards === '' ? (
          <ActivityIndicator color={colors.primary} />
        ) : (
          <ScrollView>
            <View style={styles.giftCardWrapper}>
              {Object.keys(giftCards).map(cardName => (
                <View style={styles.giftCardContainer}>
                  <TouchableRipple
                    onPress={() => navigate('GiftCard', { cardName })}
                    key={cardName}
                  >
                    <>
                      <View style={styles.giftCartItemContainer}>
                        <Image
                          source={giftCardImgs[cardName.toLowerCase()]}
                          style={styles.giftCardImg}
                        />
                      </View>
                      <Text style={styles.giftCardTxt}>
                        {capitalize(cardName)}
                      </Text>
                    </>
                  </TouchableRipple>
                </View>
              ))}
            </View>
          </ScrollView>
        )}
      </FlipContent>
    </FlipContainer>
  );
};

export default GiftCards;
