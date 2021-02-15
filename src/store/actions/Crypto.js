import axios from '../../lib/axios';
import handleError from '../../lib/handleError';
import { ALT_WALLET_DATA, UPDATE_CYPTO_RATE } from '../types';

const altWalletData = payload => ({
  type: ALT_WALLET_DATA,
  payload,
});

const updateCryptoRate = payload => ({
  type: UPDATE_CYPTO_RATE,
  payload,
});

export const getCryptoTicker = () => async dispatch => {
  try {
    const { status, data: response } = await axios.get(
      '/transactions/btc/tickers'
    );
    if (status === 200) {
      dispatch(updateCryptoRate(response.data.tickers));
    }
  } catch (err) {}
};

export const getWalletDetails = () => async (dispatch, getState) => {
  const { id } = getState().auth.user;
  try {
    const { status, data: response } = await axios.get(`/wallets/${id}`);
    if (status === 200) {
      dispatch(altWalletData(response.data));
    }
  } catch (error) {
    handleError(error);
  }
};
