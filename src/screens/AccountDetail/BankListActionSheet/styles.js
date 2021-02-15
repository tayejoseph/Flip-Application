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
    fontSize: 18,
    paddingVertical: 5,
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
  // ActionSheet
  bankName: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
  searchBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    marginTop: 20,
    marginBottom: 30,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingLeft: 15,
  },
});

export default Container;
