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
    TabBarIOS,
    StyleSheet,
    Text
} from 'react-native';



export default class App extends Component {

    state = {
        title: '<TabBarIOS>',
        description: 'Tab-based navigation.',
        displayName: 'TabBarExample',
        selectedTab: 'redTab',
        notifCount: 0,
        presses: 0,
    }

    _renderContent = (color, pageText, num) => {
        return (
            <View style={[styles.tabContent, {backgroundColor: color}]}>
                <Text style={styles.tabText}>{pageText}</Text>
                <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
            </View>
        )
    }

    render()
    {
        return (
            <TabBarIOS
                barTintColor="darkslateblue">
                <TabBarIOS.Item
                    title="Blue Tab"
                    icon={{uri:'home_icon', scale:3}}
                    selected={this.state.selectedTab === 'blueTab'}
                    renderAsOriginal={true}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'blueTab',
                        });
                    }}>
                    {this._renderContent('#414A8C', 'Blue Tab')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={{uri:'home_icon', scale:3}}
                    title="Red Tab"
                    renderAsOriginal={true}
                    badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'redTab',
                            notifCount: this.state.notifCount + 1,
                        });
                    }}>
                    {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={{uri:'home_icon', scale:3}}
                    title="Green Tab"
                    renderAsOriginal={true}
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'greenTab',
                            presses: this.state.presses + 1
                        });
                    }}>
                    {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
}


var styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        margin: 50,
    },
});

