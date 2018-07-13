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
    TextInput,
    Text
} from 'react-native';



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 10, marginTop: 100}}>
                <TextInput
                    style={{height: 60, color:'#ff13c9', fontSize:30}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}