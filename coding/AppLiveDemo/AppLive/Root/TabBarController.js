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


var icons = ['home_img_tab_normal',
             'game_img_tab_normal',
             'store_img_tab_normal',
             'mine_img_tab_normal'];


class TabBarController extends Component {

    state = {
        selectedTab:0,
    };

    renderContent = (color, pageText) => {
        return (
            <View style={[styles.tabContent, {backgroundColor: color}]}>
                <Text style={styles.tabText}>{pageText}</Text>
                <Text style={styles.tabText}>re-renders of the {pageText}</Text>
            </View>
        )
    };

    render()
    {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    icon={{uri:icons[0], scale:3}}
                    selected={this.state.selectedTab === 0}
                    renderAsOriginal={true}
                    onPress={() => {
                        this.setState({
                            selectedTab: 0,
                        });
                    }}>
                    {this.renderContent('#76fffa', 'Blue Tab')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={{uri:icons[1], scale:3}}
                    selected={this.state.selectedTab === 1}
                    renderAsOriginal={true}
                    onPress={() => {
                        this.setState({
                            selectedTab: 1,
                        });
                    }}>
                    {this.renderContent('#ff94f6', 'Blue Tab')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={{uri:icons[2], scale:3}}
                    renderAsOriginal={true}
                    selected={this.state.selectedTab === 2}
                    onPress={() => {
                        this.setState({
                            selectedTab: 2,
                        });
                    }}>
                    {this.renderContent('#55ff5a', 'Red Tab')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={{uri:icons[3], scale:3}}
                    renderAsOriginal={true}
                    selected={this.state.selectedTab === 3}
                    onPress={() => {
                        this.setState({
                            selectedTab: 3,
                        });
                    }}>
                    {this.renderContent('#ebff31', 'Green Tab')}
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
}


const styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        margin: 50,
    },
});


module.exports = TabBarController;
