import Styled from 'styled-components';
import { colors, AppDimensions } from '../../constants';

const Container = Styled.View`
    flex: 1;
    padding-top: ${AppDimensions.topNavHeight};
    background-color: ${colors.primary};
`;

export default Container;
