/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 *
 */

import React, {Component} from 'react';
import {
    ActionSheetIOS,
    StyleSheet,
    Text,
    UIManager,
    View,
} from 'react-native';

var ReactNative = require('react-native');


var BUTTONS = [
    'Option 0',
    'Option 1',
    'Option 2',
    'Delete',
    'Cancel',
];

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;


export default class App extends Component {

    state = {
        clicked:'none',
        text: 'none',
    };

    ActionSheetExample = () => {
        ActionSheetIOS.showActionSheetWithOptions({
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
            },
            (buttonIndex) => {
                this.setState({
                    clicked: BUTTONS[buttonIndex],
                });
            });
    }

    ActionSheetTintExample = () => {
        ActionSheetIOS.showActionSheetWithOptions({
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                tintColor: 'green',
            },
            (buttonIndex) => {
                this.setState({
                    clicked: BUTTONS[buttonIndex],
                });
            });
    };

    ShareActionSheetExample = () => {
        ActionSheetIOS.showShareActionSheetWithOptions({
                url: this.props.url,
                message: 'message to go with the shared url',
                subject: 'a subject to go in the email heading',
                excludedActivityTypes: [
                    'com.apple.UIKit.activity.PostToTwitter'
                ]
            },
            (error) => alert(error),
            (success, method) => {
                var text;
                if (success) {
                    text = `Shared via ${method}`;
                } else {
                    text = 'You didn\'t share';
                }
                this.setState({text});
            });
    };

    ShareScreenshotExample = () => {
        // Take the snapshot (returns a temp file uri)
        ReactNative.takeSnapshot('window').then((uri) => {
            // Share image data
            ActionSheetIOS.showShareActionSheetWithOptions({
                    url: uri,
                    excludedActivityTypes: [
                        'com.apple.UIKit.activity.PostToTwitter'
                    ]
                },
                (error) => alert(error),
                (success, method) => {
                    var text;
                    if (success) {
                        text = `Shared via ${method}`;
                    } else {
                        text = 'You didn\'t share';
                    }
                    this.setState({text});
                });
        }).catch((error) => alert(error));
    };

    render() {
        return (
            <View style={{flex:1, marginTop:44}}>
                <View style={{flex:1}}>
                    <Text>
                        Clicked button: {this.state.clicked}
                    </Text>
                    <Text onPress={this.ActionSheetExample} style={style.button}>
                        Click to show the ActionSheet
                    </Text>
                </View>

                <View style={{flex:1}}>
                    <Text onPress={this.ActionSheetTintExample} style={style.button}>
                        Click to show the ActionSheet
                    </Text>
                    <Text>
                        Clicked button: {this.state.clicked}
                    </Text>
                </View>

                <View style={{flex:1}}>
                    <Text onPress={this.ShareActionSheetExample} style={style.button}>
                        Click to show the Share ActionSheet
                    </Text>
                    <Text>
                        {this.state.text}
                    </Text>
                </View>

                <View style={{flex:1}}>
                    <Text onPress={this.ShareScreenshotExample} style={style.button}>
                        Click to show the Share ActionSheet
                    </Text>
                    <Text>
                        {this.state.text}
                    </Text>
                </View>
            </View>
        );
    };
}


const style = StyleSheet.create({
    button: {
        marginBottom: 10,
        fontWeight: '500',
    }
});

