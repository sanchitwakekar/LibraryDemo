/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//import FunctionExample from './ModulesJSFiles/FunctionExample';
import RNCommunicateFunctionsLibrary from 'react-native-communicate-functions-library';
import React, {Fragment} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(RNCommunicateFunctionsLibrary.show('sanchit'));
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
      </Fragment>
    );
  }
}

export default App;
