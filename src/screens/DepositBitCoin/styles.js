import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const Styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 200,
    paddingTop: 35,
  },
  cardListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cardListIconContainer: {
    marginRight: 20,
  },
  cardTxt: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Styles;
