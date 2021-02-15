//@flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DefaultTheme, TextInput as Input, Text } from 'react-native-paper';

import { colors } from '../../constants';

type Props = {
  onChangeText?: Function,
  onBlur?: Function,
  keyboardType:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad',
  textContentType:
    | 'URL'
    | 'creditCardNumber'
    | 'emailAddress'
    | 'familyName'
    | 'middleName'
    | 'name'
    | 'telephoneNumber'
    | 'username'
    | 'password'
    | 'newPassword'
    | 'oneTimeCode',
  maxLength?: number,
  secureTextEntry?: boolean,
  style?: Object,
  value?: string | number,
  placeholder: string,
  autoCapitalize?: 'none' | 'sentences ' | 'words' | 'characters',
  error: boolean,
  disabled?: boolean,
  label?: string,
  returnKeyType: 'done' | 'next',
  multiline?: boolean,
  numberOfLines?: number,
  autoCorrect?: boolean,
  caretHidden?: boolean,
  dataDetectorTypes?: 'link' | 'phoneNumber',
  editable?: boolean,
  labelStyle?: Object,
  mode?: 'outlined' | 'flat',
  left?: React$Node,
  right?: React$Node,
};

const TextInput = ({
  onChangeText,
  onBlur,
  keyboardType,
  secureTextEntry,
  style,
  value,
  placeholder,
  label,
  returnKeyType,
  disabled,
  error,
  autoCapitalize,
  multiline,
  numberOfLines,
  autoCorrect,
  maxLength,
  caretHidden,
  dataDetectorTypes,
  textContentType,
  editable = true,
  mode = 'outlined',
  left,
  right,
  labelStyle = {},
}: Props): React$Node => (
  <View style={{ ...style }}>
    {label && <Text style={{ ...styles.label, ...labelStyle }}>{label}</Text>}
    <Input
      onChangeText={onChangeText}
      onBlur={onBlur}
      theme={{
        ...DefaultTheme,
        roundness: 4,
        colors: { placeholder: DefaultTheme.colors.placeholder },
      }}
      secureTextEntry={secureTextEntry}
      mode={mode}
      keyboardType={keyboardType}
      underlineColorAndroid={'transparent'}
      value={value}
      placeholder={placeholder}
      returnKeyType={returnKeyType}
      disabled={disabled}
      error={error}
      autoCapitalize={autoCapitalize}
      multiline={multiline}
      numberOfLines={numberOfLines}
      autoCorrect={autoCorrect}
      maxLength={maxLength}
      caretHidden={caretHidden}
      dataDetectorTypes={dataDetectorTypes}
      textContentType={textContentType}
      editable={editable}
      left={left}
      right={right}
    />
  </View>
);

TextInput.defaultProps = {
  keyboardType: 'default',
  style: {},
  placeholder: 'Enter text here',
  returnKeyType: 'next',
  disabled: false,
  error: false,
  multiline: false,
  autoCorrect: false,
  textContentType: 'none',
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    color: colors.primary,
  },
});
