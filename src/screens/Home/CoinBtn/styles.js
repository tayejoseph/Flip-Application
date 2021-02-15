import Styled, { css } from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

const Container = Styled(TouchableRipple)`
    height: 55px;
    width: 55px;
    border-width: 2px;
    border-color: ${({ active }) => (!active ? '#C0B1B1' : '#fff')};
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    ${({ middle }) =>
      middle &&
      css`
        margin: 0 10px;
      `}
`;

export const styles = StyleSheet.create({
  coinTxt: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Container;
