import Styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

const Container = Styled.View`

`;

export const ListItemContainer = Styled(TouchableRipple)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;

`;

export const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 15,
  },
  listItemLgTxt: {
    fontSize: 20,
  },
  listItemSmTxt: {
    fontSize: 14,
  },
  listItemImg: {
    width: 45,
    height: 45,
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 45,
  },
});

export default Container;
