//@flow
import React from 'react';
import { View, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  style?: Object;
}

const iconElement = ({ name, style, ...props }: Props) => (
  <View style={{ alignSelf: 'center', ...style, ...props }}>
    <Icon
      name={Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`}
      {...props}
    />
  </View>
);

export default iconElement;
