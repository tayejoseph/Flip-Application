/** @flow */
const wait = async (callback: Function, time: string = 1000): Promise => {
  try {
    setTimeout(await callback, time);
  } catch (e) {
    throw new Error(e);
  }
};

export default wait;
