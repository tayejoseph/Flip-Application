import React from 'react';
import { Text } from 'react-native-paper';
import { colors } from '../../../constants';
import Container, { styles } from './styles';

const CoinBtn = ({ title, active, ...props }): React$Node => (
  <Container {...props} active={active}>
    <Text
      style={{ ...styles.coinTxt, color: active ? '#fff' : colors.inActive }}
    >
      {title}
    </Text>
  </Container>
);

export default CoinBtn;
