/** @flow */
import Toast from './toast';

import { capitalize } from '../helpers';

type arg = {
  data: Object,
};

const handleError = ({ data }: arg) => {
  let errorMessage = '';
  if (typeof data !== 'object') {
    errorMessage = 'An error occurred, please try again';
  } else {
    for (let error of Object.values(data)) {
      errorMessage = `${errorMessage}${
        error !== null || error !== void 0 ? `${error}` : ''
      }`;
    }
  }

  Toast(capitalize(errorMessage), 'danger');
};

export default handleError;
