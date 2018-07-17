/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    // ActivityIndicator,
    AccessibilityInfo,
    View,
    Text
} from 'react-native';



export default class App extends Component {
    state = {
        screenReaderEnabled: false,
    }

    componentDidMount() {
        AccessibilityInfo.addEventListener(
            'change',
            this._handleScreenReaderToggled
        );
        AccessibilityInfo.fetch().done((isEnabled) => {
            this.setState({
                screenReaderEnabled: isEnabled
            });
        });
    }

    componentWillUnmount() {
        AccessibilityInfo.removeEventListener(
            'change',
            this._handleScreenReaderToggled
        );
    }

    _handleScreenReaderToggled = (isEnabled) => {
        this.setState({
            screenReaderEnabled: isEnabled,
        });
    }

    render() {
        return (
            <View style={{marginTop:44}}>
                <Text>
                    The screen reader is {this.state.screenReaderEnabled ? 'enabled' : 'disabled'}.
                </Text>
            </View>
        );
    }
}

