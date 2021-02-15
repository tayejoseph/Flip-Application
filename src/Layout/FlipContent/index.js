//@flow
import React from 'react';
import { Dimensions } from 'react-native';
import { WaterMark } from '../../components';

import Container from './style';

const { height } = Dimensions.get('window');

const FlipContent = ({ children, style, hasWaterMark }): React$Node => {
  return (
    <Container style={style}>
      {hasWaterMark && (
        <WaterMark bottom={height} fillColor={'rgba(238, 242,247, 1)'} right />
      )}
      {children}
    </Container>
  );
};

export default FlipContent;
