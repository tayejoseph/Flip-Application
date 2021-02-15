import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const Styles = StyleSheet.create({
  contentContainer: {
    padding: 0,
    paddingTop: 0,
    paddingTop: 30,
  },
  textInput: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
  billContainer: {
    paddingLeft: 10,
    marginBottom: 20,
  },
  billItemsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  billItem: {
    width: '33.33%',
    paddingRight: 10,
    marginBottom: 20,
  },
  billWrapperLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
});

export default Styles;
