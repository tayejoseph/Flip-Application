import axios from '../../lib/axios';
import { ALT_TRANSACTION_HISTORY } from '../types';
import { getWalletDetails } from './Crypto';
import handleError from '../../lib/handleError';
import Toast from '../../lib/toast';

const altTransactionHistory = payload => ({
  type: ALT_TRANSACTION_HISTORY,
  payload,
});

export const initiateBuyBitCoin = transactionData => async (
  dispatch,
  getState
) => {
  const { id } = getState().auth.user;
  try {
    const { status, data: response } = await axios.post(
      `/transactions/btc/${id}/buy`,
      transactionData
    );

    if (status === 201) {
      const updateWalletData = await dispatch(getWalletDetails());
      Toast(response.message);
    }
  } catch ({ response }) {
    handleError(response);
  }
};

export const initialSellBitCoin = transactionData => async (
  dispatch,
  getState
) => {
  const { id } = getState().auth.user;
  try {
    const { status, data: response } = axios.post(
      `/transactions/btc/${id}/sell`,
      transactionData
    );

    if (status === 201) {
      Toast(response.message);
    }
  } catch ({ response }) {
    handleError(response);
  }
};

export const initialSendBtcExternalAcc = () => async (dispatch, getState) => {
  const { id } = getState().auth.user;
  try {
    const { status, data: response } = axios.post(
      `/transactions/btc/${id}/send`
    );
    if (status === 201) {
      Toast(response.message);
    }
  } catch ({ response }) {
    handleError(response);
  }
};

export const initializePayment = transactionDetail => async (
  dispatch,
  getState
) => {
  const { id } = getState().auth.user;
  try {
    return await axios.post(`/payments/inwards/${id}`, {
      ...transactionDetail,
    });
  } catch ({ response }) {
    handleError(response);
  }
};

export const getPaymentDetails = transactionDetail => async (
  dispatch,
  getState
) => {
  const { id } = getState().auth.user;
  try {
    const response = await axios.get(
      `/payments/inwards/${id}/31f2500d-c162-443a-aa7e-7502418a5363`
    );
  } catch ({ response }) {
    handleError(response);
  }
};

export const initiateWithDrawal = transactionDetail => async (
  dispatch,
  getState
) => {
  const { id } = getState().auth.user;
  try {
    return await axios.post(`/payments/outwards/${id}`, {
      ...transactionDetail,
    });
  } catch ({ response }) {
    handleError(response);
  }
};

export const receiveBtc = transactionDetail => async (dispatch, getState) => {
  const { id } = getState().auth.user;
  try {
    const { status, data: response } = await axios.post(
      `/transactions/btc/${id}/receive`

      // transactionDetail
    );
    if (status === 200) {
    }
  } catch (error) {
    handleError(error);
  }
};

export const getTransactionHistory = () => async (dispatch, getState) => {
  const { id } = getState().auth.user;
  try {
    const { status, data: response } = await axios.get(
      `/transactions/btc/${id}/history`
    );
    if (status === 200) {
      dispatch(altTransactionHistory(response.data.transactions));
    }
  } catch (error) {
    handleError(error);
  }
};
