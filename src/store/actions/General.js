import axios from '../../lib/axios';
import { ALT_BANK_LISTS } from '../types';
import handleError from '../../lib/handleError';

const altBankLists = payload => ({
  type: ALT_BANK_LISTS,
  payload,
});

export const getBankBranch = bankId => async () => {
  try {
    return await axios.get(`/misc/get-bank-branches/${bankId}`);
  } catch (error) {}
};

export const validateAccNumber = accDetails => {
  try {
    return axios.post('/misc/verify-bank-details', accDetails);
  } catch (error) {
    handleError(error);
  }
};

export const getBankByCountry = country => async dispatch => {
  try {
    const banks = {};
    const getNgBank = async () => await axios.get(`/misc/get-banks/NG`);
    const getGhBank = async () => await axios.get(`/misc/get-banks/GH`);
    const [gnBank, ngBanks] = await Promise.all([getGhBank(), getNgBank()]);
    if (gnBank.status === 200) {
      banks.GHS = gnBank.data.data.banks;
    }
    if (ngBanks.status === 200) {
      banks.NGN = ngBanks.data.data.banks;
    }
    dispatch(altBankLists(banks));
  } catch (error) {}
};

// Data Subscription
