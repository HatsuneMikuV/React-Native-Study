/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    FlatList,
    StyleSheet,
    Image,
    View,
    Text
} from 'react-native';



var json = [
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

export default class App extends Component {



    // 注意这个方法前面有async关键字
    async getMoviesFromApiAsync() {
        // 注意这里的await语句，其所在的函数必须有async关键字声明
        return fetch('https://facebook.github.io/react-native/movies.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'key1=value1&key2=value2'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={json}
                    renderItem={({item}) =>
                        <View style={styles.item}>
                            <Image source={{uri:item.icon}} style={styles.icon}/>
                            <Text style={styles.title}>{item.key}</Text>
                        </View>
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