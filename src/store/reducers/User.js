const initState = {
  walletData: '',
  transactionHistory: '',
  accountData: '',
};

// I need to change this name to user
const Banking = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_ACCOUNT_DATA':
      return { ...state, accountData: action.payload };
    case 'ALT_WALLET_DATA':
      return { ...state, walletData: action.payload };
    case 'ALT_TRANSACTION_HISTORY':
      return { ...state, transactionHistory: action.payload };
    default:
      return state;
  }
};

export default Banking;
