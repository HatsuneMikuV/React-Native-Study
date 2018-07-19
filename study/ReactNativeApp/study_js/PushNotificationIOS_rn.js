/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    AlertIOS,
    PushNotificationIOS,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Button
} from 'react-native';



export default class App extends Component {

    constructor(props) {
        super(props);

    }

    state = {
        permissions: null,
    };

    componentWillMount() {
        // Add listener for push notifications
        PushNotificationIOS.addEventListener('notification', this._onNotification);
        // Add listener for local notifications
        PushNotificationIOS.addEventListener('localNotification', this._onLocalNotification);
    }

    componentWillUnmount() {
        // Remove listener for push notifications
        PushNotificationIOS.removeEventListener('notification', this._onNotification);
        // Remove listener for local notifications
        PushNotificationIOS.removeEventListener('localNotification', this._onLocalNotification);
    }

    render() {
        PushNotificationIOS.requestPermissions();
        return (
            <View style={{marginTop:44}}>
                <View>
                    <Button
                        onPress={this._sendNotification}
                        title="Send fake notification"
                    />

                    <Button
                        onPress={this._sendLocalNotification}
                        title="Send fake local notification"
                    />
                </View>
                <View style={{marginTop:50}}>
                    <Button
                        onPress={this._showPermissions.bind(this)}
                        title="Show enabled permissions"
                    />
                    <Text>
                        {JSON.stringify(this.state.permissions)}
                    </Text>
                </View>
                <View style={{marginTop:50}}>
                    <Button
                        onPress={() => PushNotificationIOS.setApplicationIconBadgeNumber(42)}
                        title="Set app's icon badge to 42"
                    />
                    <Button
                        onPress={() => PushNotificationIOS.setApplicationIconBadgeNumber(0)}
                        title="Clear app's icon badge"
                    />
                </View>
            </View>
        );
    }

    _showPermissions() {
        PushNotificationIOS.checkPermissions((permissions) => {
            this.setState({permissions});
        });
    }

    _sendNotification() {
        require('RCTDeviceEventEmitter').emit('remoteNotificationReceived', {
            aps: {
                alert: 'Sample notification',
                badge: '+1',
                sound: 'default',
                category: 'REACT_NATIVE'
            },
        });
    }

    _sendLocalNotification() {
        require('RCTDeviceEventEmitter').emit('localNotificationReceived', {
            aps: {
                alert: 'Sample local notification',
                badge: '+1',
                sound: 'default',
                category: 'REACT_NATIVE'
            },
        });
    }

    _onNotification(notification) {
        AlertIOS.alert(
            'Push Notification Received',
            'Alert message: ' + notification.getMessage(),
            [{
                text: 'Dismiss',
                onPress: null,
            }]
        );
    }

    _onLocalNotification(notification){
        AlertIOS.alert(
            'Local Notification Received',
            'Alert message: ' + notification.getMessage(),
            [{
                text: 'Dismiss',
                onPress: null,
            }]
        );
    }
}


const styles = StyleSheet.create({
    button: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLabel: {
        color: 'blue',
    },
});
