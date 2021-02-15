/** @flow */
const isValidPassword = (password: string): boolean => {
  return password.length >= 8;
};

export default isValidPassword;
