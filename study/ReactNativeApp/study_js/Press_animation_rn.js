/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';

import {
    Animated,
    View,
    LayoutAnimation,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';


export default class App extends Component {

    state = {
        w: 100,
        h: 100,
    };

    _onPress = () => {
        // Animate the update
        LayoutAnimation.spring();
        this.setState({w: this.state.w + 15, h: this.state.h + 15})
    }

    render() {
        return (
            <View style={{flex:1}}>
                <FadeInView style={{marginTop:44, width: 250, height: 60, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
                <FadeInView style={{marginTop:44, width: 250, height: 60, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
                <View style={styles.container}>
                    <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
                    <TouchableOpacity onPress={this._onPress}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Press me!</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}


class FadeInView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
        };
    }
    componentDidMount() {
        Animated.timing(                            // 随时间变化而执行的动画类型
            this.state.fadeAnim,                      // 动画中的变量值
            {
                toValue: 1,                             // 透明度最终变为1，即完全不透明
                duration:250,                             //持续时间   单位ms
            }
        ).start();                                  // 开始执行动画
    }
    render() {
        return (
            <Animated.View                            // 可动画化的视图组件
                style={{
                    ...this.props.style,
                    opacity: this.state.fadeAnim,          // 将透明度指定为动画变量值
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 200,
        height: 200,
        backgroundColor: 'red',
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});