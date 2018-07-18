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
                unselectedTintColor="yellow"
                barTintColor="darkslateblue">
                <TabBarIOS.Item
                    title="Blue Tab"
                    renderAsOriginal={true} // 如果为false，只会显示纯色图片
                    icon={{uri:'home_icon', size:{height:40, width:40}}}
                    selected={this.state.selectedTab === 'blueTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'blueTab',
                        });
                    }}>
                    {this._renderContent('#414A8C', 'Blue Tab')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="history"
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
                    icon={{uri: 'home_icon', size:{width: 40, height: 40}}}
                    selectedIcon={{uri: 'home_icon', size:{width: 40, height: 40}}}
                    renderAsOriginal
                    title="More"
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

