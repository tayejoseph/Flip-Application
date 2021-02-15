import Styled, { css } from 'styled-components';
import { StyleSheet } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { colors } from '../../constants';

export const TopIconItemContainer = Styled(TouchableRipple)`
    flex-direction: ${({ IconPosition }) =>
      IconPosition === 'left' ? 'row-reverse' : 'row'};
    align-items: center;
    color: #fff;
`;

export const TopIconItem = Styled.View`
    border-radius: 30px;
    width: 30px;
    height: 30px;
    justify-content: center;
    padding: 0
    align-items: center;
    border-color: #fff;
    border-width: 2;
    margin-right: ${({ IconPosition }) => (IconPosition !== 'left' ? 10 : 0)};
    margin-left: ${({ IconPosition }) => (IconPosition === 'left' ? 10 : 0)};
`;

export const ActionBtnContainer = Styled.View`
  flex: 1;
  border-right-width: ${({ direction }) => (direction === 'right' ? 3 : 0)};
  border-left-width: ${({ direction }) => (direction !== 'right' ? 3 : 0)};
  border-color: "rgba(238, 242,247, 1)";
  align-items: center;
`;

const styles = StyleSheet.create({
  topIconTxt: {
    color: '#fff',
    fontSize: 16,
  },
  transactionBtnCover: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '5%',
  },
  transactBtn: {
    height: 80,
    width: 80,
    borderColor: colors.primary,
    borderRadius: 20,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transactionStatementContainer: {
    alignItems: 'center',
    paddingVertical: 25,
    paddingBottom: 30,
  },
  activeBtnCover: {
    paddingTop: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionBtn: {
    marginBottom: '10%',
    marginHorizontal: '10%',
  },
  lgTxt: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  smTxt: {
    fontSize: 17,
    color: '#C0B1B1',
  },
});

export default styles;
