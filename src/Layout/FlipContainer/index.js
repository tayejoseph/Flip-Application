//@flow
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'react-native-paper';
import { WaterMark } from '../../components';
import Container from './style';

const FlipContainer = ({
  children,
  style,
  hasWaterMark = true,
}): React$Node => {
  const { colors } = useTheme();

  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.secondary }}>
        <Container style={style}>
          {hasWaterMark && <WaterMark top={true} centered={true} />}
          {children}
        </Container>
      </SafeAreaView>
    </>
  );
};

export default FlipContainer;
