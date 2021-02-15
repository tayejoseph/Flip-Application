import { StyleSheet } from 'react-native';
import { colors } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    flexDirection: 'row',
    borderWidth: 4,
    borderColor: colors.lightBlue,
    alignItems: 'center',
    borderRadius: 20,
    height: 85,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  currency: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    borderRadius: 20,
  },
  detailsContainer: {},
  currencyTitle: {
    textAlign: 'right',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  walletBalance: {
    textAlign: 'right',
    fontWeight: '900',
    color: colors.inactive,
    fontSize: 15,
  },
});

export default styles;
