import { StyleSheet } from 'react-native';
import { colors } from '../../../constants';

const Styles = StyleSheet.create({
  contentContainer: {
    padding: 0,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  textInput: {
    marginBottom: 40,
  },
  pickerLabel: {
    marginBottom: 10,
    color: colors.primary,
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    borderColor: '#757575',
    marginBottom: 20,
  },
});

export default Styles;
