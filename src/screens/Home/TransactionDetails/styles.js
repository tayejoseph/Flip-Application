import { StyleSheet } from 'react-native';

import { colors } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  summaryContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#f0f1fc',
    padding: 12,
  },
  summaryTitle: {
    color: '#94a0a4',
    fontSize: 15,
    fontWeight: '500',
  },
  summaryAmount: {
    color: '#3dc078',
    marginTop: 8,
    fontSize: 24,
  },
  detailsTitle: {
    marginTop: 24,
    fontSize: 16,
  },
  detailsContainer: {
    marginTop: 8,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#f0f1fc',
    padding: 12,
    backgroundColor: colors.secondary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 36,
    alignItems: 'center',
  },
  rowKey: {
    color: '#818181',
    fontWeight: '600',
  },
  rowValue: {
    color: '#000000',
    fontWeight: '400',
  },
});

export default styles;
