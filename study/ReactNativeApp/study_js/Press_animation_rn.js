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
    componentDidMount() {
        this.timer = setTimeout(
            () => { console.log('heheda'); },
            5
        );
    }
    componentWillUnmount() {
        // 请注意Un"m"ount的m是小写

        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    state = {
        w: 100,
        h: 100,
    };

    _onPressBig = () => {
        // Animate the update
        LayoutAnimation.spring();
        this.setState({w: this.state.w + 15, h: this.state.h + 15})
    }
    _onPressSmall = () => {
        // Animate the update
        LayoutAnimation.spring();
        this.setState({w: this.state.w - 15, h: this.state.h - 15})
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
                    <TouchableOpacity onPress={this._onPressBig}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Press me big!big!big!</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._onPressSmall}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Press me small!small!small!</Text>
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