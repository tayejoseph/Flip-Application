import axios from '../../lib/axios';
import { INITE_GIFTCARDS } from '../types';
import Toast from '../../lib/toast';
import handleError from '../../lib/handleError';

export const initialGiftCards = payload => ({
  type: INITE_GIFTCARDS,
  payload,
});

export const getAllGiftCards = () => async dispatch => {
  try {
    const { status, data: response } = await axios.get(
      '/transactions/cards/all'
    );
    if (status === 200) {
      dispatch(initialGiftCards(response.data.cardRateDetails));
    }
  } catch ({ response }) {
    handleError(response);
  }
};

export const sellGiftCards = cardDetails => async (dispatch, getState) => {
  const { id } = getState().auth.user;
  try {
    const { status, data: response } = await axios.post(
      `/transactions/cards/${id}/sell`,
      cardDetails
    );
    if (status === 201) {
      Toast(response.message, 'success');
      return {
        success: true,
      };
    }
  } catch ({ response }) {
    handleError(response);
  }
};
