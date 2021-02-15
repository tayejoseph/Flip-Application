import { StyleSheet } from 'react-native';
import Styled from 'styled-components';
import { colors } from '../../../constants';

export const ButtonsContainer = Styled.View`
  flex: 1;
  padding-top: 50;
  flex-direction: row;
  justify-content: space-between;
`;

export const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
  },
  balanceTxt: {
    fontSize: 20,
    color: colors.inActive,
  },
  accountTxt: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  btnGroup: {
    paddingLeft: 10,
    flexDirection: 'row',
  },
  actionBtn: {
    marginBottom: 30,
    width: 150,
    marginRight: 10,
  },
});

export default styles;
