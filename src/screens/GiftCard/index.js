import React, { useState, useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Button } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { capitalize } from '../../helpers';
import { colors } from '../../constants';
import { Text, RadioButton } from 'react-native-paper';
import { sellGiftCards } from '../../store/actions/GiftCards';
import { FlipContainer, Header, Title, FlipContent } from '../../Layout';
import { TopNav } from '../../components';
import styles, { Label } from './styles';

const GiftCard = () => {
  const {
    params: { cardName },
  } = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [{ currency, cardType, referenceCurrency }, setState] = useState({
    currency: '',
    cardType: '',
    referenceCurrency: '',
  });
  const { giftCards } = useSelector(state => state);
  const [loading, setLoading] = useState(false);
  const disabled = useMemo(() => !currency || !cardType || loading, [
    currency,
    cardType,
    loading,
  ]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await dispatch(
        sellGiftCards({
          referenceCurrency,
          amount: 100,
          cardCode: `${cardName}.${currency}.${cardType}`,
          imageURLs: ['https://placeimg.com/640/480/animals/grayscale'],
        })
      );
      if (response.success) {
        setTimeout(() => {
          navigation.goBack();
        }, 800);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <FlipContainer>
      <TopNav />
      <Header>
        <Title>{`${capitalize(cardName)} Gift Card`}</Title>
      </Header>
      <FlipContent>
        <ScrollView style={styles.formContainer}>
          <View>
            <Text style={styles.sectionLabel}>Select Country</Text>
            <RadioButton.Group
              onValueChange={currency => {
                setState(s => ({ ...s, currency }));
              }}
              value={currency}
            >
              <View style={{ marginBottom: 20 }}>
                {Object.keys(giftCards[cardName]).map(currency => (
                  <View
                    key={currency}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <View style={styles.radioContainer}>
                      <RadioButton value={currency} color={colors.primary} />
                      <Label
                        onPress={() => setState(s => ({ ...s, currency }))}
                      >
                        {currency}
                      </Label>
                    </View>
                  </View>
                ))}
              </View>
            </RadioButton.Group>
          </View>
          {currency !== '' && (
            <View>
              <Text style={styles.sectionLabel}>Select Card Type</Text>
              <RadioButton.Group
                onValueChange={cardType => {
                  setState(s => ({ ...s, cardType }));
                }}
                value={cardType}
              >
                <View style={{ marginBottom: 20 }}>
                  {Object.keys(giftCards[cardName][currency]).map(itemName => (
                    <View
                      key={itemName}
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <View style={styles.radioContainer}>
                        <RadioButton value={itemName} color={colors.primary} />
                        <Label
                          onPress={() =>
                            setState(s => ({ ...s, cardType: itemName }))
                          }
                        >
                          {itemName}
                        </Label>
                      </View>
                    </View>
                  ))}
                </View>
              </RadioButton.Group>
            </View>
          )}
          {cardType !== '' && (
            <>
              {giftCards[cardName][currency][cardType].map(item => (
                <>
                  <View
                    style={{
                      alignItems: 'flex-start',
                    }}
                  >
                    <Text
                      style={{
                        padding: 20,
                        backgroundColor: colors.primary,
                        color: '#fff',
                        borderRadius: 8,
                      }}
                    >
                      ${item.max}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      marginTop: 20,
                    }}
                  >
                    <RadioButton.Group
                      onValueChange={referenceCurrency => {
                        setState(s => ({ ...s, referenceCurrency }));
                      }}
                      value={referenceCurrency}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          justifyContent: 'space-between',
                        }}
                      >
                        {Object.keys(item.rate).map(rate => (
                          <View
                            key={rate}
                            style={{ ...styles.radioContainer, width: '50%' }}
                          >
                            <RadioButton value={rate} color={colors.primary} />
                            <Label
                              onPress={() =>
                                setState(s => ({
                                  ...s,
                                  referenceCurrency: rate,
                                }))
                              }
                            >
                              {rate} {item.rate[rate]}
                            </Label>
                          </View>
                        ))}
                      </View>
                    </RadioButton.Group>
                  </View>
                </>
              ))}
              <View style={{ marginTop: 20 }}>
                <Text style={styles.sectionLabel}>Upload Card</Text>
                <View
                  style={{
                    borderStyle: 'dotted',
                    borderWidth: 2,
                    borderColor: colors.primary,
                    marginBottom: 40,
                    borderRadius: 4,
                    height: 80,
                    justifyContent: 'center',
                    marginTop: 5,
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ fontSize: 20 }}>+</Text>
                </View>
              </View>
            </>
          )}
          <Button
            disabled={disabled}
            borderRadius={30}
            style={{ marginBottom: 30 }}
            loading={loading}
            onPress={handleSubmit}
          >
            Done
          </Button>
        </ScrollView>
      </FlipContent>
    </FlipContainer>
  );
};

export default GiftCard;
