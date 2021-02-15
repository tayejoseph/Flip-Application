/** @flow */
import {Clipboard} from 'react-native';
import Toast from 'react-native-simple-toast';

const copy = async (
  value: string,
  key: string = '',
  customMessage: string = '',
) => {
  try {
    await Clipboard.setString(value);
    Toast.show(
      !!customMessage
        ? customMessage
        : `Copied${!!key ? ` ${key} ` : ' '}${value} to clipboard`,
    );
  } catch (e) {
    Toast.show('An error occurred');
  }
};

export default copy;
