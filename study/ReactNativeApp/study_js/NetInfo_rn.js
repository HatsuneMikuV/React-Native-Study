/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    NetInfo,
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native';



export default class App extends Component {

    state = {
        connectionInfoHistory:[],
        connectionInfo: null,
        isConnected: null,
        isConnectionExpensive:null,
    };

    componentDidMount() {
        NetInfo.addEventListener(
            'connectionChange',
            this.handleConnectionInfoChange
        );
        NetInfo.getConnectionInfo().done(
            (connectionInfo) => {
                this.setState({
                    connectionInfo:connectionInfo,
                });
            }
        );
        NetInfo.isConnected.addEventListener(
            'connectionChange',
            this.handleConnectionisConnected
        );
        NetInfo.isConnected.fetch().done(
            (isConnected) => {
                this.setState({
                    isConnected,
                });
            }
        );
    };

    componentWillUnmount() {
        NetInfo.removeEventListener(
            'connectionChange',
            this.handleConnectionInfoChange
        );
        NetInfo.isConnected.removeEventListener(
            'connectionChange',
            this.handleConnectionisConnected
        );
    };

    handleConnectionInfoChange = (connectionInfo) => {
        var connectionInfoHistory = this.state.connectionInfoHistory.slice();
        connectionInfoHistory.push(connectionInfo);
        this.setState({
            connectionInfo:connectionInfo,
            connectionInfoHistory:connectionInfoHistory,
        });
    };

    handleConnectionisConnected = (isConnected) => {
        this.setState({
            isConnected:isConnected,
        });
    };

    checkIfExpensive = () => {
        NetInfo.isConnectionExpensive().then(
            isConnectionExpensive => {
                this.setState({
                    isConnectionExpensive:isConnectionExpensive,
                });
            }
        );
    };

    render() {
        return (
            <View style={{marginTop:44}}>
                <View>
                    <Text>{JSON.stringify(this.state.connectionInfoHistory)}</Text>
                </View>
                <View>
                    <Text>{JSON.stringify(this.state.connectionInfo)}</Text>
                </View>
                <View>
                    <Text>{this.state.isConnected ? 'Online' : 'Offline'}</Text>
                </View>
                <TouchableWithoutFeedback onPress={this.checkIfExpensive}>
                    <View>
                        <Text>Click to see if connection is expensive:
                            {this.state.isConnectionExpensive === true ? 'Expensive' :
                                this.state.isConnectionExpensive === false ? 'Not expensive'
                                    : 'Unknown'}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}
