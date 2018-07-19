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
    Text,
    View
} from 'react-native';



export default class App extends Component {

    state = {
        watchID:null,
        initialPosition: 'unknown',
        lastPosition: 'unknown',
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var initialPosition = JSON.stringify(position);
                this.setState({
                    initialPosition:initialPosition,
                });
            },
            (error) => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        var watchID = navigator.geolocation.watchPosition((position) => {
            var lastPosition = JSON.stringify(position);
            this.setState({
                lastPosition:lastPosition,
            });
        });

        this.setState({
            watchID:watchID,
        });
    };

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.state.watchID);
    };



    render() {
        return (
            <View style={{marginTop:44}}>
                <Text>
                    <Text style={styles.title}>Initial position: </Text>
                    {this.state.initialPosition}
                </Text>
                <Text>
                    <Text style={styles.title}>Current position: </Text>
                    {this.state.lastPosition}
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    title: {
        fontWeight: '500',
    },
});
