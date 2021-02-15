/** @flow */

// Intl constructor can be used to replace this,
// that is in a non react native environment
const toMoney = (value: string | number = 0): string => {
  if (typeof value !== 'string') {
    value = String(value);
  }

  let fix: string = '00';

  if (value.includes('.')) {
    const split: Array = value.split('.');
    value = split[0];
    fix = split[1];
  }

  value = value.split('').reverse();
  for (let i in value) {
    if ((i - 3) % 3 === 0 && Number(i) !== 0) {
      value[i] = `${value[i]},`;
    }
  }

  return `${value.reverse().join('')}.${fix}`;
};

export default toMoney;
