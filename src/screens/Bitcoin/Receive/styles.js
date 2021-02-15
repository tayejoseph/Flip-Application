import { StyleSheet } from 'react-native';
import { colors } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  img: {
    width: 180,
    alignSelf: 'center',
    height: 180,
  },
  bitCoinAddressContainer: {
    paddingHorizontal: 10,
    paddingVertical: 18,
    borderRadius: 10,
    borderWidth: 1.5,
    marginVertical: 30,
    alignItems: 'center',
    borderColor: colors.primary,
  },
  bitCoinAddress: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 15,
  },
});

export default styles;
