//@flow
function debounce(func, ms = 0) {
  let timeoutId;
  return function () {
    let _this = this;
    const args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      return func.apply(_this, args);
    }, ms);
  };
}

export default debounce;
