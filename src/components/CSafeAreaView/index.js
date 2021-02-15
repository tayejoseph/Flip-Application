// @flow
import { default as React, useEffect, useState } from 'react';
import { View } from 'react-native';
import SafeArea from 'react-native-safe-area';

type Props = {
  children: React$Node,
  style?: Object,
};

const CSafeAreaView = ({ children, style }: Props): React$Node => {
  const [insets, setInsets] = useState<{ top: number, bottom: number }>({
    top: 44,
    bottom: 34,
  });

  useEffect(() => {
    const updateInsets = async () => {
      const {
        safeAreaInsets: { top, bottom },
      } = await SafeArea.getSafeAreaInsetsForRootView();
      setInsets(i => ({
        ...i,
        top: top || 44,
        bottom: bottom || 34,
      }));
    };

    updateInsets();
  }, []);

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        flex: 1,
        ...style,
      }}
    >
      {children}
    </View>
  );
};

export default CSafeAreaView;
