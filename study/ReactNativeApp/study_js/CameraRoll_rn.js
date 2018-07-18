/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    CameraRoll,
    Image,
    View,
    Text,
    Button,
    ScrollView,
    FlatList,
    StyleSheet
} from 'react-native';

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;


// 一些常量设置
var cols = 3;
var cellWH = 100;
var vMargin = (screenWidth - cellWH * cols) / (cols + 1);
var hMargin = 25;


export default class App extends Component {

    state = {
        photos:[],
    };

    _handleButtonPress = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
        })
            .then(r => {
                this.setState({
                    photos: r.edges,
                });
            })
            .catch((err) => {
                //Error Loading Images
            });
    };
    render() {
        return (
            <View style={{marginTop:44}}>
                <Button title="Load Images" onPress={this._handleButtonPress} />
                <FlatList
                    data={this.state.photos}
                    renderItem={(item) => this.itemView(item)}
                    keyExtractor={this._keyExtractor}
                    numColumns = {3}
                    horizontal={false}
                />
            </View>
        );
    }

    //此函数用于为给定的item生成一个不重复的key
    _keyExtractor = (item, index) => item.key;

    itemView = (item) => {
        var img = this.state.photos[item.index];
        return (
            <View style={styles.innerViewStyle}>
                <Image
                    style={styles.iconStyle}
                    source={{ uri: img.node.image.uri }}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    iconStyle:{
        width:80,
        height:80
    },

    innerViewStyle:{
        width:cellWH,
        height:cellWH,
        marginLeft:vMargin,
        marginTop:hMargin,
    }
});
