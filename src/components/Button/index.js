//@flow
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

type Props = {
  mode?: 'contained' | 'text',
  compact?: boolean,
  color?: string,
  loading?: boolean,
  disabled?: boolean,
  icon?: string,
  children: React$Node,
  onPress: Function,
  contentStyle?: Object,
  labelStyle?: Object,
  uppercase?: boolean,
  label: string,
  height?: number,
  borderRadius?: number | string,
  style?: Object,
};

const Button = ({
  mode,
  compact,
  color,
  loading,
  disabled,
  icon,
  height,
  borderRadius,
  children,
  onPress,
  label,
  contentStyle,
  labelStyle,
  uppercase,
  style,
}: Props): React$Node => (
  <PaperButton
    height={height}
    mode={mode}
    compact={compact}
    color={color}
    icon={icon}
    onPress={onPress}
    uppercase={uppercase}
    loading={loading}
    disabled={disabled}
    contentStyle={{
      ...contentStyle,
      height,
    }}
    style={{ ...style, ...styles.button, height, borderRadius }}
    borderRadius={borderRadius}
    accessibilityLabel={label}
    labelStyle={labelStyle}
  >
    {children}
  </PaperButton>
);

Button.defaultProps = {
  mode: 'contained',
  onPress: console.log,
  compact: false,
  height: 50,
  borderRadius: 2,
  uppercase: false,
};

export default Button;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
  },
});
