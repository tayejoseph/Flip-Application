import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  giftCardWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 10,
  },
  giftCardContainer: {
    width: '33.33%',
    paddingRight: 10,
    marginBottom: 10,
  },
  giftCartItemContainer: {
    height: 100,
    borderRadius: 20,
  },
  giftCardImg: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  giftCardTxt: {
    textAlign: 'center',
    fontSize: 12,
  },
});

export default styles;
