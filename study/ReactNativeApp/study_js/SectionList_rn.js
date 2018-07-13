/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    SectionList,
    StyleSheet,
    Image,
    View,
    Text
} from 'react-native';



var itemRows = [
    {key: 'Devin', icon: 'home_icon'},
    {key: 'Jackson', icon: 'home_icon'},
    {key: 'James', icon: 'home_icon'},
    {key: 'Joel', icon: 'home_icon'},
    {key: 'John', icon: 'home_icon'},
    {key: 'Jillian', icon: 'home_icon'},
    {key: 'Jimmy', icon: 'home_icon'},
    {key: 'Julie', icon: 'home_icon'},
    {key: 'Julie1', icon: 'home_icon'},
    {key: 'Julie2', icon: 'home_icon'},
    {key: 'Julie3', icon: 'home_icon'},
    {key: 'Julie4', icon: 'home_icon'},
    {key: 'Julie5', icon: 'home_icon'},
];

var sectionData = [
    {title: 'D', data:itemRows},
    {title: 'J', data:itemRows},
];

export default class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={sectionData}
                    renderItem={({item}) =>
                        <View style={styles.item}>
                            <Image source={{uri:item.icon}} style={styles.icon}/>
                            <Text style={styles.title}>{item.key}</Text>
                        </View>
                    }
                    renderSectionHeader={({section}) =>
                        <Text style={styles.sectionHeader}>{section.title}</Text>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        height: 76,
    },
    title: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 18,
    },
    icon: {
        marginLeft: 10,
        width:66,
        height:66,
    },
})