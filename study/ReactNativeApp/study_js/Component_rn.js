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
    Modal,
    TouchableHighlight,
    Picker,
    ProgressViewIOS,
    RefreshControl,
    ListView,
    SegmentedControlIOS,
    Slider,
    Switch,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Text
} from 'react-native';


var list = ["1111", "2222", "3333", "4444", "5555"];
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


export default class App extends Component {


    state = {
        screenReaderEnabled: false,
        date: new Date(),
        modalVisible: false,
        language:'Java',
        refreshing:false,
        dataSource:ds.cloneWithRows(['row 1', 'row 2']),
        selectedIndex:"test1",
        valueChangeSlider:0,
        valueSwitch:true,
        imageSize:44,
    }

    setModalVisible(visible) {
        this.setState({
            modalVisible: visible,
        });
    }

    componentDidMount() {
        AccessibilityInfo.addEventListener(
            'change',
            this._handleScreenReaderToggled
        );
        AccessibilityInfo.fetch().done((isEnabled) => {
            this.setState({
                screenReaderEnabled: isEnabled,
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

    _onRefresh = () => {
        this.setState({
            refreshing: true,
        });
        setTimeout(()=>{
            this.setState({
                refreshing: false,
                dataSource:ds.cloneWithRows(list),
            });
        },2000)
    }

    _onChangeSegment = (value) => {
        this.setState({
            selectedIndex:value,
        });
    }

    _onPressButton = () => {
        this.setState({
            imageSize:this.state.imageSize += 10,
        });
    }

    render() {
        return (
            <View style={{marginTop:44}}>
                <ScrollView contentContainerStyle={{height:3000}}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={this._onRefresh}
                                    title={"下拉刷新"}
                                />
                            }>

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

                    {/*Modal*/}
                    <Modal
                        animationType={"slide"}
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                    >
                        <View style={{marginTop: 22}}>
                            <View>
                                <Text>Hello World!</Text>

                                <TouchableHighlight onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible)
                                }}>
                                    <Text style={{backgroundColor:'#76fffa'}}>Hide Modal</Text>
                                </TouchableHighlight>

                            </View>
                        </View>
                    </Modal>
                    <TouchableHighlight onPress={() => {
                        this.setModalVisible(true)
                    }}>
                        <Text style={{backgroundColor:'#76fffa'}}>Show Modal</Text>
                    </TouchableHighlight>

                    {/*Picker*/}
                    <Picker
                        selectedValue={this.state.language}
                        onValueChange={(lang) => this.setState({language: lang})}>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                        <Picker.Item label="Object-C" value="oc" />
                    </Picker>

                    {/*ProgressViewIOS*/}
                    <ProgressViewIOS style={{marginTop:10}}
                        progress={0.35}
                        progressTintColor={'#ff13c9'}
                        trackTintColor={'#55ff5a'}
                    />
                    <ProgressViewIOS style={{marginTop:10}}
                        progress={0.7}
                        progressTintColor={'#ff1722'}
                        trackTintColor={'#4dceff'}
                    />

                    {/*RefreshControl*/}
                    {/*为了防止手势冲突问题，将其添加在最上面的ScrollView上了*/}
                    <View style={{marginTop:30, height:100}}>
                        <ListView style={{flex:1}}
                                  dataSource={this.state.dataSource}
                                  renderRow={(rowData) => <Text style={{backgroundColor:'#8bff95'}}>{rowData}</Text>}
                        />
                    </View>

                    {/*SegmentedControlIOS*/}
                    <Text style={{height:20, color:'#21bb45'}}>
                        The selectedIndex is {this.state.selectedIndex}.
                    </Text>
                    <SegmentedControlIOS style={{marginLeft:50, marginRight:50}}
                        values={["test1", "test2", "test3"]}
                        selectedIndex={0}
                        tintColor={'#ff1722'}
                        onValueChange={this._onChangeSegment}
                    />

                    {/*Slider*/}
                    <Slider style={{marginTop:20, marginLeft:50, marginRight:50}}
                        value={30}
                        maximumValue={100}
                        minimumValue={0}
                        onValueChange={(value) => this.setState({valueChangeSlider: value})}
                    />
                    <Slider style={{marginTop:10, marginLeft:50, marginRight:50}}
                        disabled={true}
                        maximumValue={10}
                        value={this.state.valueChangeSlider * 0.1}
                    />

                    {/*Switch*/}
                    <View style={{flexDirection:'row', marginTop:10}}>
                        <Switch
                            value={this.state.valueSwitch}
                            onValueChange={(value) => this.setState({valueSwitch: value})}
                        />
                        <Switch
                            value={this.state.valueSwitch}
                            onValueChange={(value) => this.setState({valueSwitch: value})}
                        />
                    </View>

                    {/*TouchableHighlight*/}
                    <TouchableHighlight onPress={this._onPressButton} underlayColor={'#ffffff'}>
                        <Image source={{uri: 'home_icon'}} style={{width: this.state.imageSize, height: this.state.imageSize}} />
                    </TouchableHighlight>

                    {/*TouchableOpacity*/}
                    <TouchableOpacity onPress={this._onPressButton} activeOpacity={0.8}>
                        <Image source={{uri: 'home_icon'}} style={{width: this.state.imageSize, height: this.state.imageSize}} />
                    </TouchableOpacity>

                    {/*TouchableWithoutFeedback*/}
                    <TouchableWithoutFeedback onPress={this._onPressButton}>
                        <Image source={{uri: 'home_icon'}} style={{width: this.state.imageSize, height: this.state.imageSize}} />
                    </TouchableWithoutFeedback>
                </ScrollView>
            </View>
        );
    }
}