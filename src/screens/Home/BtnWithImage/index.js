import React from 'react';
import { Image, View } from 'react-native';
import { TouchableRipple, Text } from 'react-native-paper';
import Icon from '../../../lib/icon';
import Styles from './style';

const BtnWithImage = ({
  imgSrc,
  iconName,
  iconColor,
  title,
  containerStyle,
  onPress,
  labelStyle,
  iconStyle,
  iconBgColor,
}) => {
  return (
    <TouchableRipple
      style={{
        ...Styles.btnContainer,
      }}
      borderRadius={10}
      onPress={onPress}
    >
      <>
        {iconName ? (
          <Icon
            name={iconName}
            style={{
              ...Styles.iconStyle,
              backgroundColor: iconBgColor ? iconBgColor : '#fff',
            }}
            color={iconColor}
            size={16}
          />
        ) : (
          <Image
            style={{
              width: 40,
              height: 40,
              resizeMode: 'cover',
            }}
            source={imgSrc}
          />
        )}
        <Text style={Styles.txt}>{title}</Text>
      </>
    </TouchableRipple>
  );
};

export default BtnWithImage;
