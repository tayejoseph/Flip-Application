import axios from '../../lib/axios';
import AsyncStorage from '@react-native-community/async-storage';
import handleError from '../../lib/handleError';
import Toast from '../../lib/toast';
import { ALT_BILL_CATEGORIES } from '../types';

const altBillCategories = payload => ({
  type: ALT_BILL_CATEGORIES,
  payload,
});

export const getBillCategories = billCategory => async dispatch => {
  try {
    const { status, data: response } = await axios.get(
      `/transactions/bills/${billCategory}`
    );
    if (status === 200) {
      dispatch(
        altBillCategories({ [billCategory]: response.data.billItems.data })
      );
    }
  } catch ({ response }) {
    handleError(response);
  }
};

export const initiateBillPayment = (billCategory, billInfo) => async (
  dispatch,
  getState
) => {
  const { id } = getState().auth.user;
  try {
    const { status, data: response } = await axios.post(
      `/transactions/bills/${id}/${billCategory}`,
      billInfo
    );
  } catch ({ response }) {
    handleError(response);
  }
};
