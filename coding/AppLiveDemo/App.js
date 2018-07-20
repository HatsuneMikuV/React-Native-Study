/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

const TabBarController = require('./AppLive/Root/TabBarController');

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <TabBarController/>
    );
  }
}
