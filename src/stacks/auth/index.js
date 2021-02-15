//@flow
import { default as React } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn, SignUp } from '../../screens';

const { Screen, Navigator } = createStackNavigator();

const Auth = ({ navigation }): React$Node => (
  <Navigator initialRouteName={'SignIn'} headerMode={'none'}>
    <Screen name={'SignIn'} component={SignIn} />
    <Screen name={'SignUp'} component={SignUp} />
  </Navigator>
);

export default Auth;
