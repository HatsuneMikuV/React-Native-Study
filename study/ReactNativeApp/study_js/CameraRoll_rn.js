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
    ImagePickerIOS,
    ImageStore,
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
        image:null,
        isHave:false,
    };

    pickImage = () =>  {

        ImagePickerIOS.canRecordVideos(() => alert('能获取视频'));

        ImagePickerIOS.canUseCamera(() => alert('能获取图片'));

        // openSelectDialog(config, successCallback, errorCallback);

        ImagePickerIOS.openSelectDialog({}, (imageUri) => {

            this.setState({
                image: imageUri,
            });
        }, (error) => {
            // console.error(error)
        });
    }
    handleButtonPress = () => {
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
    hasImage = () => {
        <ImageStore/>
        ImageStore.hasImageForTag(this.state.image, (hasImage) => {
            this.setState({
                isHave: hasImage,
            });
        });
    };
    render() {
        return (
            <View style={{marginTop:44}}>
                <Button title="Load Images" onPress={this.handleButtonPress} />
                <FlatList
                    data={this.state.photos}
                    renderItem={(item) => this.itemView(item)}
                    keyExtractor={this._keyExtractor}
                    numColumns = {3}
                    horizontal={false}
                />
                <View style={{marginTop:30, height: 300, width:200}}>
                    <Button title="Chose Image" onPress={this.pickImage}/>
                    <Text>ImagePickerIOS {this.state.isHave ? "Have":"None"}</Text>
                    {this.state.image?
                        <Image style={{flex: 1, backgroundColor:'#123123'}} source={{ uri: this.state.image }} /> :
                        null
                    }
                    <Button title="has thisImage" onPress={this.hasImage}/>
                </View>
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
        width:90,
        height:90
    },

    innerViewStyle:{
        width:cellWH,
        height:cellWH,
        marginLeft:vMargin,
        marginTop:hMargin,
    }
});
