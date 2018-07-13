/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    ScrollView,
    Image,
    Text
} from 'react-native';



export default class App extends Component {

    render() {
        return (
            <ScrollView >
                <Text style={{fontSize:70}}>If you like</Text>
                <Image source={{uri:'home_icon'}} style={{width:66, height:66}}/>
                <Image source={{uri:'home_icon'}} style={{width:66, height:66}}/>
                <Text style={{fontSize:50}}>Scrolling down</Text>
                <Image source={{uri:'home_icon'}} style={{width:66, height:66}}/>
                <Image source={{uri:'home_icon'}} style={{width:66, height:66}}/>
                <Text style={{fontSize:30}}>What's the best</Text>
                <Image source={{uri:'home_icon'}} style={{width:66, height:66}}/>
                <Image source={{uri:'home_icon'}} style={{width:66, height:66}}/>
                <Text style={{fontSize:10}}>Framework around?</Text>
                <Image source={{uri:'home_icon'}} style={{width:66, height:66}}/>
                <Image source={{uri:'home_icon'}} style={{width:66, height:66}}/>
                <Text style={{fontSize:30}}>React Native</Text>
                <Image source={{uri:'home_icon'}} style={{width:66, height:66}}/>
                <Image source={{uri:'home_icon'}} style={{width:66, height:66}}/>
                <Text style={{fontSize:50}}>React Native</Text>
                <Image source={{uri:'home_icon'}} style={{width:66, height:66}}/>
                <Image source={{uri:'home_icon'}} style={{width:66, height:66}}/>
                <Text style={{fontSize:70}}>React Native</Text>
            </ScrollView>
        );
    }
}