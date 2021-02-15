/**
 * @flow
 * @param {string} text
 * @author theGrandmaster
 * @description checks if the text is a space separated set of
 * strings of at least 2 strings
 * */
const checkForFullName = (text: string): boolean => {
  const splitText: Array<string> = text.split(' ');

  return (
    splitText.map((t) => !!t.length).reduce((prev, acc) => prev && acc) &&
    splitText.length > 1
  );
};

export default checkForFullName;
