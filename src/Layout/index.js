import Styled from 'styled-components';
import { Text } from 'react-native-paper';

export { default as FlipContainer } from './FlipContainer';
export { default as FlipContent } from './FlipContent';

export const Header = Styled.View`
    justify-content: center;
    align-items: center;
    justify-content: center;
`;

export const Title = Styled(Text)`
    color: #fff;
    font-weight: bold;
    font-size: 30;
    margin-bottom: 25px;
`;
