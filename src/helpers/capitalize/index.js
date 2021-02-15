/** @flow */
const capitalize = (text: string): string =>
  `${text.charAt(0).toUpperCase()}${text.substring(1)}`;

export default capitalize;
