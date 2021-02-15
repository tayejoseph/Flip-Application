import axios from '../../lib/axios';
import AsyncStorage from '@react-native-community/async-storage';
import { UPDATE_ACCOUNT_DATA } from '../types';
import handleError from '../../lib/handleError';
import { getBankBranch } from './General';
import Toast from '../../lib/toast';

export const updateAccountData = payload => ({
  type: UPDATE_ACCOUNT_DATA,
  payload,
});

export const handleGetBankAccs = () => async (dispatch, getState) => {
  const { id } = getState().auth.user;
  try {
    const getNairaAcc = axios.get(
      `/user-account/${id}/bank-accounts?currency=NGN`
    );
    const getCedisAcc = axios.get(
      `/user-account/${id}/bank-accounts?currency=GHS`
    );
    let bankAcc = [];
    const [nairaAcc, cedisAcc] = await Promise.all([getNairaAcc, getCedisAcc]);

    if (nairaAcc.status === 200) {
      bankAcc = [...bankAcc, ...nairaAcc.data.data.bankAccounts];
    }
    if (cedisAcc.status === 200) {
      bankAcc = [...bankAcc, ...cedisAcc.data.data.bankAccounts];
    }
    dispatch(updateAccountData(bankAcc));
    return {
      success: true,
    };
  } catch ({ response }) {
    handleError(response);
  }
};

export const AddBankAccount = accDetails => async (dispatch, getState) => {
  const { id, accountData } = getState().auth.user;
  try {
    const { status, data: response } = await axios.post(
      `/user-account/${id}/bank-accounts`,
      accDetails
    );
    if (status === 201) {
      const newBankInfo = await dispatch(handleGetBankAccs());
      console.log(newBankInfo);
      if (newBankInfo.success) {
        Toast(response.message, 'success');
        dispatch(
          updateAccountData([...accountData, response.data.bankAccount])
        );
        return { success: true };
      }
    }
  } catch (response) {
    handleError(response);
  }
};

export const DeleteAccount = accDetails => async (dispatch, getState) => {
  const { id, accountData } = getState().auth.user;
  try {
    const { status, data: response } = await axios.delete(
      `/user-account/${id}/bank-accounts/${accDetails.id}`
    );
    if (status === 200) {
      const newBankInfo = await dispatch(handleGetBankAccs());
      if (newBankInfo.success) {
        Toast(response.message, 'success');
        dispatch(
          updateAccountData(
            accountData.filter(
              data => data.id !== response.data.deletedBankAccount.id
            )
          )
        );
        return { success: true };
      }
    }
  } catch ({ response }) {
    handleError(response);
  }
};
