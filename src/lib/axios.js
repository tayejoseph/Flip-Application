import axios from 'axios';
import Toast from '../lib/toast';
import AsyncStorage from '@react-native-community/async-storage';
import { decrypt } from 'react-native-simple-encryption';
import { Constants } from '../config';

const axiosInstance = axios.create({
  baseURL: Constants.testBaseURL,
});

axiosInstance.interceptors.request.use(
  config => {
    (async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) axiosInstance.defaults.headers['x-auth-token'] = token;
    })();
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  config => config,
  error => {
    if (error.response.status === 403) {
      Toast(error.response.data.detail, 'danger');
    } else if (error.response.status >= 500) {
      // Toast('An error occurred, please try again', 'danger');
    } else if (!error.response) {
      Toast('Please check your connection and try again', 'info');
    } else if (error.message) {
      Toast(error.message, 'danger');
    }

    return Promise.reject(error);
  }
);

// // (async () => {
// //   const token = JSON.parse(await AsyncStorage.getItem('token'));
// //   console.log(token, 'Sdjsdjsdkj');
// //   // axiosInstance.defaults.headers['x-auth-token'] = decrypt(key, pin) || '';
// // })();

// axiosInstance.interceptors.response.use(
//   config => config,
//   error => {
//     if (error.response.status === 403) {
//       Toast(error.response.data.detail, 'danger');
//     } else if (error.response.status >= 500) {
//       // Toast('An error occurred, please try again', 'danger');
//     } else if (!error.response) {
//       Toast('Please check your connection and try again', 'info');
//     } else if (error.message) {
//       Toast(error.message, 'danger');
//     }

//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
