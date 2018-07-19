/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Keyboard,
    View,
    TextInput,
    Text,
    InteractionManager,
    TouchableWithoutFeedback,
} from 'react-native';



export default class App extends Component {

    state = {
        Shown:0,
        Hidden:0,
        text:'none',
    };

    componentWillMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }

    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    keyboardDidShow = () => {
        this.setState({
            Shown:this.state.Shown + 1,
        });
        InteractionManager.runAfterInteractions((then) => {
            //执行
            this.setState({
                text:'执行',
            });
            for (let i = 0; i < 1000000000; i++) {

            }
            this.setState({
                text:'执行 done',
            });
        },{},{})
    };

    keyboardDidHide = () => {
        this.setState({
            Hidden:this.state.Hidden + 1,
        });
    };

    pressClick = () => {
        Keyboard.dismiss();
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.pressClick}>
                <View style={{marginTop:44, flex:1}}>
                    <Text>Keyboard Shown {this.state.Shown}</Text>
                    <TextInput placeholder='123123'
                               placeholderTextColor={'#40b1ff'}
                               style={{backgroundColor:'#8bff95'}}>
                    </TextInput>
                    <Text>Keyboard Hidden {this.state.Hidden}</Text>
                    <TextInput
                        onSubmitEditing={Keyboard.dismiss}
                        placeholder='123123'
                        placeholderTextColor={'#40b1ff'}
                        style={{backgroundColor:'#8bff95'}}
                    />
                    <Text>InteractionManager {this.state.text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
