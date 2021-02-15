// @flow

import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { IconButton, Text } from 'react-native-paper';

import { colors } from '../../constants';

type Props = {
  title?: string,
  style?: Object,
  invert?: boolean,
};

const BreadCrumb = ({ title, style = {}, invert }: Props): React$Node => {
  const { goBack } = useNavigation();

  return (
    <View style={{ ...styles.breadCrumb, ...style }}>
      <IconButton
        icon={'chevron-left'}
        size={28}
        onPress={() => goBack()}
        color={invert ? colors.secondary : colors.primary}
        style={styles.breadCrumbArrow}
      />
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text
          style={{
            ...styles.breadCrumbTitle,
            color: invert ? colors.secondary : colors.primary,
          }}
        >
          {title || ''}
        </Text>
      </View>
    </View>
  );
};

export default BreadCrumb;

const styles = StyleSheet.create({
  breadCrumb: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    width: '100%',
    paddingRight: 18,
  },
  breadCrumbTitle: {
    fontWeight: '500',
    fontSize: 16,
    alignSelf: 'flex-end',
  },
});
