import { StyleSheet } from 'react-native';
import { colors } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 32,
    justifyContent: 'center',
    marginVertical: 30,
  },
  formContainer: {},
  textInput: {
    marginBottom: 20,
  },
  headingContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  header1: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 4,
  },
  header2: {
    color: '#000000',
    fontSize: 16,
  },
  forgotPassword: {
    color: colors.primary,
    textDecorationLine: 'underline',
    textAlign: 'right',
    // marginBottom: 16,
  },
  newToFlip: {
    color: '#000000',
    textAlign: 'center',
    marginTop: 16,
    fontSize: 14,
  },
  link: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },
});

export default styles;
