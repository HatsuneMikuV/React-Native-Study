/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Clipboard,
    View,
    Text
} from 'react-native';



export default class App extends Component {

    state = {
        content: 'Content will appear here',
    };

    async _setClipboardContent(){
        Clipboard.setString('Hello World');
        try {
            var content = await Clipboard.getString();
            this.setState({
                content:content,
            });
        } catch (e) {
            this.setState({
                content:e.message,
            });
        }
    };

    render() {
        return (
            <View style={{ marginTop: 44}}>
                <Text onPress={this._setClipboardContent} style={{color: 'blue'}}>
                    Tap to put "Hello World" in the clipboard
                </Text>
                <Text style={{color: 'red', marginTop: 20}}>
                    {this.state.content}
                </Text>
            </View>
        );
    }
}

