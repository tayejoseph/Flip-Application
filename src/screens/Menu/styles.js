import { StyleSheet } from 'react-native';
import Styled from 'styled-components';
import { colors, AppDimensions } from '../../constants';

export const Container = Styled.View`
  flex: 1;
  background-color: ${colors.primary};
  padding-top: ${AppDimensions.topNavHeight};
`;

const styles = StyleSheet.create({
  username: {
    color: colors.secondary,
    textAlign: 'center',
    marginTop: 16,
    fontWeight: 'bold',
    fontSize: 16,
  },
  menuItem: {
    backgroundColor: '#295d9f',
    width: '100%',
    marginBottom: 16,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  menuItemContent: {
    flexDirection: 'row',
  },
  menuItemTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'capitalize',
    alignSelf: 'center',
  },
});

export default styles;
