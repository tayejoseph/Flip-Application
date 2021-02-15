import { Dimensions, StyleSheet } from 'react-native';
import Styled from 'styled-components/native';
import { AppDimensions } from '../../constants';
import { colors } from '../../constants';
import { toPx } from '../../helpers';

export const Container = Styled.View`
    position: absolute;
    flex-direction: row;
    align-items: center;
    padding: 0px 15px;
    height: ${AppDimensions.topNavHeight};
    top: 0px;
    width: ${toPx(Dimensions.get('window').width)};

`;

export const Left = Styled.View`
  flex-direction: row;
`;

export const Middle = Styled.View`
  flex: 1;

`;

export const Right = Styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const Styles = StyleSheet.create({
  backBtn: {
    height: 32,
    width: 32,
    borderRadius: 32,
    borderWidth: 1.5,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBasedNavTxtRight: {
    color: colors.secondary,
    fontWeight: 'bold',
    paddingRight: 10,
  },
});
