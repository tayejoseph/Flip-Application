//@flow
import React from 'react';
import { StyleSheet } from 'react-native';
import { G, Path, Svg } from 'react-native-svg';

import { colors } from '../../constants';

interface Props {
  style?: StyleSheet;
  type?: 'icon' | 'logo';
  scale?: string | number;
}

const Logo = ({
  style = {},
  type = 'icon',
  scale = 1.6,
}: Props): React$Node => (
  <Svg style={{ ...styles.logoContainer, ...style }}>
    <G xmlns="http://www.w3.org/2000/svg">
      <G transform={`scale(${scale})`}>
        <Path
          fill={type === 'icon' ? '#ffffff' : colors.primary}
          d="M725.217,1370.264a40.334,40.334,0,1,1-6.94-22.631q.723,1.063,1.378,2.177A40.153,40.153,0,0,1,725.217,1370.264Z"
          transform="translate(-644.526 -1329.919)"
        />
        <Path
          d="M770.056,1379.824H734.537c-10.745,0-13.767,5.706-17.248,13.387l-3.886,8.573c.17-.15.342-.3.516-.439a7.363,7.363,0,0,1,1-.768c.2-.144.4-.285.606-.419a16.548,16.548,0,0,1,6.6-2.37,49.391,49.391,0,0,1,7.385-.526c.211,0,.426-.007.642-.007H748.4c13.44-.013,19.794-9.307,21.658-17.431Z"
          transform="translate(-694.792 -1366.339)"
          fill={type === 'icon' ? colors.primary : '#ffffff'}
        />
        <Path
          d="M714.082,1450.462c-4.411,10.567-7.925,14.477-21.393,14.212-6.54-.129-12.966.632-17.141,5.139-4.265,4.6-4.377,12.45,1.71,15.282H667.05c-2.969,0-2.819-1.912-1.69-4.4L674.738,1460a17.6,17.6,0,0,1,6.089-6.908,14.956,14.956,0,0,1,5.95-2.114,55.882,55.882,0,0,1,8.824-.512Z"
          transform="translate(-659.185 -1417.891)"
          fill={type === 'icon' ? colors.primary : '#ffffff'}
        />
        <Path
          d="M720.094,1509.163l-7.032,15.288c-1.865,3.659-3.082,3.464-5.9,3.464h-.2a11.652,11.652,0,0,1-4.232-2.389c-3.4-3.1-2.876-8.511.142-11.768,3.966-4.282,10.425-4.716,15.893-4.609q.66.013,1.331.014Z"
          transform="translate(-685.292 -1460.71)"
          fill={type === 'icon' ? '#000000' : '#ffffff'}
        />
      </G>
    </G>
  </Svg>
);

export default Logo;

const styles = StyleSheet.create({
  logoContainer: {
    width: 130,
    height: 140,
  },
});
