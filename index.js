/**
 * @format
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import App from './App';
import { name as appName } from './app.json';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Reducers from './src/store/reducers';
import { createStore, applyMiddleware, compose } from 'redux';

const store = createStore(Reducers, applyMiddleware(compose(thunk)));

console.disableYellowBox = true;

const NewApp = (): React$Node => (
  <Provider store={store}>
    <SafeAreaProvider style={{ flex: 1 }}>
      <App />
    </SafeAreaProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => NewApp);
