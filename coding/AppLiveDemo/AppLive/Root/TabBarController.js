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
    NavigatorIOS,
    TouchableHighlight,
    ScrollView,
    Text
} from 'react-native';


var icons = ['home_img_tab_normal',
             'game_img_tab_normal',
             'store_img_tab_normal',
             'mine_img_tab_normal'];

var iconselects = ['home_img_tab_select',
                   'game_img_tab_select',
                   'store_img_tab_select',
                   'mine_img_tab_select'];

var colors = ['#76fffa',
              '#ff94f6',
              '#55ff5a',
              '#ebff31'];


class TabBarController extends Component {

    state = {
        selectedTab:0,
    };

    handleNavigationRequest = () => {
        // this.ref.nav.push({
        //     component: MyView,
        //     title: 'Genius',
        //     passProps: { myProp: 'genius' },
        // });
    };

    renderContent = (index) => {
        return (
            <NavigatorIOS
                ref="nav"
                translucent={false}
                initialRoute={{
                    component: MyView(index),
                    title: 'Foo This',
                    passProps: { myProp: 'foo' },
                    rightButtonTitle: 'Add',
                    // onRightButtonPress: () => this.handleNavigationRequest(),
                }}
                style={{flex: 1}}
            />
        )
    };

    tabBarItem = (index) => {
        return (
            <TabBarIOS.Item
                icon={{uri:icons[index], scale:3}}
                selectedIcon={{uri:iconselects[index], scale:3}}
                selected={this.state.selectedTab === index}
                renderAsOriginal={true}
                onPress={() => {
                    this.setState({
                        selectedTab: index,
                    });
                }}>
                {this.renderContent(index)}
            </TabBarIOS.Item>
        )
    };

    render() {
        return (
            <TabBarIOS
                translucent={false}
            >
                {this.tabBarItem(0)}
                {this.tabBarItem(1)}
                {this.tabBarItem(2)}
                {this.tabBarItem(3)}
            </TabBarIOS>
        )
    }
}

class MyView extends Component {

    const {index} = this.props;

    handleNextPress = (nextRoute) => {
        this.props.navigator.push(nextRoute);
    };

    render() {
        const nextRoute = {
            component: MyView,
            title: 'Bar That',
            passProps: { myProp: 'bar' },
        };
        return(
            <ScrollView style={{backgroundColor:'#123123', flex:1}}>
                {/*<TouchableHighlight onPress={this.handleNextPress(nextRoute)}>*/}
                    <Text style={{marginTop: 200, alignSelf: 'center'}}>
                        See you on the other nav {this.props.myProp}!
                    </Text>
                {/*</TouchableHighlight>*/}
            </ScrollView>
        );
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
