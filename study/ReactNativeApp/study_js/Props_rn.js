/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';


class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

export default class App extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{width: 193, height: 110}} />,
                <View style={{marginTop:150, alignItems: 'center'}}>
                    <Greeting name='Rexxar' />
                    <Greeting name='Jaina' />
                    <Greeting name='Valeera' />
                </View>
        );
    }
}

