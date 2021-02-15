/** @flow */
import AsyncStorage from '@react-native-community/async-storage';

const setItem = async (key, content) => {
  try {
    await AsyncStorage.setItem(key, content);
  } catch (e) {
    throw e;
  }
};

const useAsyncStorage = () => {
  const getItem = async item => {
    try {
      return await AsyncStorage.getItem(item);
    } catch (e) {
      throw e;
    }
  };

  return [getItem, setItem];
};

export default useAsyncStorage;
