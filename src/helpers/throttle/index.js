//@flow

const throttle = (func: Function, delay: string | number) => {
  let timerID = undefined;

  if (timerID) {
    return;
  }

  timerID = setTimeout(() => {
    func();

    timerID = undefined;
  }, delay);
};

export default throttle;
