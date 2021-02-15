//@flow
import React from 'react';
import { StatusBar, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  children: React$Node;
  style?: StyleSheet;
}

const FlipView = ({ children, style }: Props): React$Node => {
  const { colors } = useTheme();

  return (
    <>
      <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.secondary }}>
        <View style={{ ...style, flex: 1 }}>{children}</View>
      </SafeAreaView>
    </>
  );
};

export default FlipView;
