/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    PanResponder,
    StyleSheet,
    View
} from 'react-native';


var CIRCLE_SIZE = 80;


export default class App extends Component {

    state = {
        panResponder: {},
        previousLeft: 0,
        previousTop: 0,
        circleStyles: {},
        circle:null,
    };

    componentWillMount() {
        this.setState({
            panResponder:PanResponder.create({
                onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
                onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder,
                onPanResponderGrant: this.handlePanResponderGrant,
                onPanResponderMove: this.handlePanResponderMove,
                onPanResponderRelease: this.handlePanResponderEnd,
                onPanResponderTerminate: this.handlePanResponderEnd,
            }),
            previousLeft:20,
            previousTop: 84,
            circleStyles:{
                style: {
                    left: this.state.previousLeft,
                    top: this.state.previousTop,
                    backgroundColor: 'green',
                }
            },
        });
    };

    componentDidMount() {
        this.updateNativeStyles();
    };


    render() {
        return (
            <View
                style={styles.container}>
                <View
                    ref={(circle) => {
                        this.state.circle = circle;
                    }}
                    style={styles.circle}
                    {...this.state.panResponder.panHandlers}
                />
            </View>
        );
    }

    highlight = () => {
        this.state.circleStyles.style.backgroundColor = 'blue';
        this.updateNativeStyles();
    };

    unHighlight = () => {
        this.state.circleStyles.style.backgroundColor = 'green';
        this.updateNativeStyles();
    };

    updateNativeStyles = () => {
        this.state.circle && this.state.circle.setNativeProps(this.state.circleStyles);
    };

    handleStartShouldSetPanResponder = () => {
        // Should we become active when the user presses down on the circle?
        return true;
    };

    handleMoveShouldSetPanResponder = () => {
        // Should we become active when the user moves a touch over the circle?
        return true;
    };

    handlePanResponderGrant = () => {
        this.highlight();
    };
    handlePanResponderMove = (e, gestureState) => {
        this.state.circleStyles.style.left = this.state.previousLeft + gestureState.dx;
        this.state.circleStyles.style.top = this.state.previousTop + gestureState.dy;
        this.updateNativeStyles();
    };
    handlePanResponderEnd = (e, gestureState) => {
        this.unHighlight();
        this.state.previousLeft += gestureState.dx;
        this.state.previousTop += gestureState.dy;
    };
}


const styles = StyleSheet.create({
    circle: {
        marginTop: 44,
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    container: {
        flex: 1,
        paddingTop: 64,
    },
});
