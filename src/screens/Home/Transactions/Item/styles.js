import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginHorizontal: 2,
    marginBottom: 12,
    minHeight: 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#f7f8fc',
  },
  transactionIconContainer: {
    height: 45,
    width: 45,
    borderRadius: 23,
  },
  transactionDetails: {
    flexDirection: 'column',
    paddingLeft: 12,
    flex: 1,
    justifyContent: 'center',
  },
  transactionFurtherDetails: {
    flexDirection: 'column',
    textAlign: 'right',
  },
  amount: {
    textAlign: 'right',
    color: 'red',
  },
  date: {
    textAlign: 'right',
    color: colors.inactive,
  },
  type: {
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#556f92',
  },
  value: {
    textAlign: 'left',
    color: colors.inactive,
  },
});

export default styles;
