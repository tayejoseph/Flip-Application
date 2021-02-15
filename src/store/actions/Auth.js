import axios from '../../lib/axios';
import AsyncStorage from '@react-native-community/async-storage';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS, UPDATE_USER_DETAILS } from '../types';
import handleError from '../../lib/handleError';
import Toast from '../../lib/toast';

export const LoginSuccess = payload => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
    payload: {},
  };
};

export const updateUserData = payload => {
  return {
    type: UPDATE_USER_DETAILS,
    payload,
  };
};

export const logOut = () => async dispatch => {
  try {
    await AsyncStorage.multiRemove(['user', 'token']);
    // Toast('Log out successful', 'success');
    await dispatch(logoutSuccess());
  } catch (e) {
    throw new Error(e);
  }
};

export const handleUpateProfile = (userId, payload) => async dispatch => {
  try {
    const { status, data: response } = await axios.put(
      `/user-account/${userId}`,
      payload
    );
    if (status === 200) {
      Toast(response.message, 'success');
      await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
      dispatch(updateUserData(response.data.user));
    }
  } catch (response) {
    handleError(response);
  }
};

// email: '1oussama_tar@poww.me',
// firstName: 'taye',
// lastName: 'joseph',
// password: '123456789',
export const handleSignUp = ({ fullName, ...authData }) => async dispatch => {
  try {
    const { status, data: response } = await axios.post('/user-account', {
      ...authData,
      firstName: fullName[0].split(' '),
      lastName: fullName[1].split(' '),
    });
    if (status === 201) {
      await AsyncStorage.multiSet(
        [
          ['user', JSON.stringify(response.data.user)],
          ['token', response.data.token],
        ],
        async () => await dispatch(LoginSuccess(response.data))
      );
      return response;
    }
  } catch ({ response }) {
    handleError(response);
  }
};

export const handleSignIn = authData => async dispatch => {
  try {
    const { status, data: response } = await axios.post('/log-in', {
      ...authData,
      email: 'wathik.liker@iel.pw',
      password: 'passwordwl',
    });
    if (status === 200) {
      await AsyncStorage.multiSet(
        [
          ['user', JSON.stringify(response.data.user)],
          ['token', response.data.token],
        ],
        async () => await dispatch(LoginSuccess(response.data))
      );
      Toast('Login successful', 'success');

      return {
        success: true,
        error: false,
      };
    }
  } catch ({ response }) {
    handleError(response);
  }
};

export const changePassword = passwordData => async (dispatch, getState) => {
  const { id } = getState().auth.user;
  try {
    const { status, data: response } = await axios.put(
      `/user-account/${id}/password`,
      passwordData
    );
    if (status === 200) {
      Toast(response.message, 'success');
    }

    return response;
  } catch ({ response }) {
    handleError(response);
  }
};
