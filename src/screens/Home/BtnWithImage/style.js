import { StyleSheet } from 'react-native';
import { colors } from '../../../constants';

const Styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    width: 150,
    marginBottom: 15,
    backgroundColor: colors.primary,
  },
  iconStyle: {
    backgroundColor: '#fff',
    width: 22,
    height: 22,
    borderRadius: 30,
    alignItems: 'center',
    marginRight: 10,
    justifyContent: 'center',
  },
  txt: {
    color: '#fff',
    fontWeight: '800',
  },
});

export default Styles;
