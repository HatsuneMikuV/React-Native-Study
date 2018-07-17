/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {
    View,
} from 'react-native';


import { NativeModules } from 'react-native';

var CalendarManager = NativeModules.CalendarManager;


export default class App extends Component {


    render() {
        return (
            <View style={{flex:1, backgroundColor:'#76fffa'}}>
                {/*<CalendarManager style={{flex:0.5}}>*/}
                {/*</CalendarManager>*/}
            </View>
        );
    }
}