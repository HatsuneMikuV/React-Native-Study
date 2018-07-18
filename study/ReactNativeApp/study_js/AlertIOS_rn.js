/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    AlertIOS
} from 'react-native';

var buttons = [{
    text: 'Custom OK',
    onPress: this.saveResponse
}, {
    text: 'Custom Cancel',
    style: 'cancel',
}];

export default class App extends Component {

    state = {
        promptValue:undefined,
        customButtons:buttons,
    };

    constructor(props) {
        super(props);

        // $FlowFixMe this seems to be a Flow bug, `saveResponse` is defined below
        this.saveResponse = this.saveResponse.bind(this);
    };

    render() {
        return (
            <View style={{marginTop:44}}>
                <Text style={{marginBottom: 10}}>
                    <Text style={{fontWeight: 'bold'}}>Prompt value:</Text> {this.state.promptValue}
                </Text>

                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={() => AlertIOS.prompt('Type a value', null, this.saveResponse)}>

                    <View style={styles.button}>
                        <Text>
                            prompt with title & callback
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={() => AlertIOS.prompt('Type a value', null, this.customButtons)}>

                    <View style={styles.button}>
                        <Text>
                            prompt with title & custom buttons
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={() => AlertIOS.prompt('Type a value', null, this.saveResponse, undefined, 'Default value')}>

                    <View style={styles.button}>
                        <Text>
                            prompt with title, callback & default value
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={() => AlertIOS.prompt('Type a value', null, this.customButtons, 'login-password', 'admin@site.com')}>

                    <View style={styles.button}>
                        <Text>
                            prompt with title, custom buttons, login/password & default value
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    };

    saveResponse(promptValue) {
        this.setState({
            promptValue: JSON.stringify(promptValue),
        });
    };
}

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
    },
});