/** @flow */
const elevationShadow = (
  elevation: number,
  color: ?string = '#ffffff',
): Object => ({
  elevation,
  shadowColor: color,
  shadowOffset: {width: 0.5 * elevation, height: 0.5 * elevation},
  shadowOpacity: 0.3,
  shadowRadius: 0.8 * elevation,
});

export default elevationShadow;
