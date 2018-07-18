/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    ActivityIndicator,
    AccessibilityInfo,
    Button,
    ScrollView,
    View,
    DatePickerIOS,
    MaskedViewIOS,
    Text
} from 'react-native';



export default class App extends Component {
    state = {
        screenReaderEnabled: false,
        date: new Date()
    }

    componentDidMount() {
        AccessibilityInfo.addEventListener(
            'change',
            this._handleScreenReaderToggled
        );
        AccessibilityInfo.fetch().done((isEnabled) => {
            this.setState({
                screenReaderEnabled: isEnabled
            });
        });
    }

    componentWillUnmount() {
        AccessibilityInfo.removeEventListener(
            'change',
            this._handleScreenReaderToggled
        );
    }

    _handleScreenReaderToggled = (isEnabled) => {
        this.setState({
            screenReaderEnabled: isEnabled,
        });
    }

    onPressLearnMore = () => {

    }
    onDateChangeChose = (date) => {
        this.setState({
            date: date,
        });
    }

    render() {
        return (
            <View style={{marginTop:44}}>
                <ScrollView style={{height:1000}}>

                    {/*AccessibilityInfo*/}
                    <Text style={{height:20, color:'#ff1e0c'}}>
                        The screen reader is {this.state.screenReaderEnabled ? 'enabled' : 'disabled'}.
                    </Text>

                    {/*ActivityIndicator*/}
                    <ActivityIndicator style={{marginTop:10}}/>

                    {/*Button*/}
                    <Button style={{marginLeft:20, height:25, width:60, backgroundColor:'#4dceff'}}
                            onPress={this.onPressLearnMore}
                            title="Learn More"
                            color='#841584'
                    />

                    {/*DatePickerIOS*/}
                    <Text style={{height:20, color:'#21bb45'}}>
                        The Date is {this.state.date.toDateString()}.
                    </Text>
                    <DatePickerIOS
                        date={this.state.date}
                        maximumDate={new Date()}
                        minimumDate={new Date(1990, 1, 1)}
                        mode={'date'}
                        onDateChange={this.onDateChangeChose}
                    />

                    {/*MaskedViewIOS*/}
                    <MaskedViewIOS
                        style={{ height:60, width:300}}
                        maskElement={
                            <View style={{flex:1}}>
                                <Text style={{flex:1, color:'#000000'}}>
                                    Basic Mask
                                </Text>
                            </View>
                        }
                    >
                        <View style={{ flex: 1, backgroundColor: 'blue' }} />
                    </MaskedViewIOS>
                </ScrollView>
            </View>
        );
    }
}

