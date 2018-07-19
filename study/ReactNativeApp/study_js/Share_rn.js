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
    Share
} from 'react-native';



export default class App extends Component {

    state = {
        result: '',
    };

    render() {
        return (
            <View style={{marginTop:44}}>
                <TouchableHighlight style={styles.wrapper}
                                    onPress={this.shareMessage}>
                    <View style={styles.button}>
                        <Text>Click to share message</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                                    onPress={this.shareText}>
                    <View style={styles.button}>
                        <Text>Click to share message, URL and title</Text>
                    </View>
                </TouchableHighlight>
                <Text>{this.state.result}</Text>
            </View>
        );
    }

    shareMessage = () => {
        Share.share({
            message: 'React Native | A framework for building native apps using React'
        })
            .then(this.showResult)
            .catch((error) => this.setState({result: 'error: ' + error.message}));
    };

    shareText = () => {
        Share.share({
            message: 'A framework for building native apps using React',
            url: 'http://facebook.github.io/react-native/',
            title: 'React Native'
        }, {
            dialogTitle: 'Share React Native website',
            excludedActivityTypes: [
                'com.apple.UIKit.activity.PostToTwitter'
            ],
            tintColor: 'green'
        })
            .then(this.showResult)
            .catch((error) => this.setState({result: 'error: ' + error.message}));
    };

    showResult = (result) =>  {
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                this.setState({result: 'shared with an activityType: ' + result.activityType});
            } else {
                this.setState({result: 'shared'});
            }
        } else if (result.action === Share.dismissedAction) {
            this.setState({result: 'dismissed'});
        }
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