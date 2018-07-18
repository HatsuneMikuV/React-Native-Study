/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    AppState,
    Text,
    View
} from 'react-native';



export default class App extends Component {

    state = {
        appState: AppState.currentState,
        previousAppStates: [],
        memoryWarnings: 0,
        showMemoryWarnings:true,
    };

    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
        AppState.addEventListener('memoryWarning', this._handleMemoryWarning);
    };

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
        AppState.removeEventListener('memoryWarning', this._handleMemoryWarning);
    };

    _handleMemoryWarning = () => {
        this.setState({
            memoryWarnings: this.state.memoryWarnings + 1,
        });
    };

    _handleAppStateChange = (appState) => {
        var previousAppStates = this.state.previousAppStates.slice();
        previousAppStates.push(this.state.appState);
        this.setState({
            appState,
            previousAppStates,
        });
    };

    render() {
        if (this.state.showMemoryWarnings) {
            return (
                <View style={{marginTop:44}}>
                    <Text>{this.state.memoryWarnings}</Text>
                </View>
            );
        }
        if (this.state.showMemoryWarnings) {
            return (
                <View style={{marginTop:44}}>
                    <Text>{this.state.appState}</Text>
                </View>
            );
        }
        return (
            <View style={{marginTop:44}}>
                <Text>{JSON.stringify(this.state.previousAppStates)}</Text>
            </View>
        );
    };
}

