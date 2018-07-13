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
    View,
    Text
} from 'react-native';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
        };

        this.fetchData = this.fetchData.bind(this)
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    data: this.state.data.concat(responseData.movies),
                });
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) =>
                        <View style={styles.itemS}>
                            <View style={styles.left}>
                                <Text style={styles.id}>{item.id}</Text>
                            </View>
                            <View style={styles.right}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.year}>{item.releaseYear}</Text>
                            </View>
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
    itemS: {
        flex: 1,
        flexDirection: 'row',
        height: 76,
    },
    left: {
        // flex: 1,
        justifyContent: 'center',
        width: 60,
        height: 76,
    },
    right: {
        flex: 1,
        flexDirection: 'column',
    },
    id: {
        alignSelf: 'center',
        fontSize: 18,
    },
    title: {
        flex: 1,
        fontSize: 18,
    },
    year: {
        flex: 1,
        fontSize: 15,
    },
})