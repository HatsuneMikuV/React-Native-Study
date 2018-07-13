/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    View
} from 'react-native';



export default class App extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                {/*flexDirection enum('row', 'row-reverse', 'column', 'column-reverse') */}
                <View style={{flex:1, flexDirection:'column'}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{width: 50, height: 10, backgroundColor: '#76fffa'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#4dceff'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#40b1ff'}} />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                        <View style={{width: 50, height: 10, backgroundColor: '#76fffa'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#4dceff'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#40b1ff'}} />
                    </View>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <View style={{width: 50, height: 10, backgroundColor: '#76fffa'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#4dceff'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#40b1ff'}} />
                    </View>
                    <View style={{flex: 1, flexDirection: 'column-reverse'}}>
                        <View style={{width: 50, height: 10, backgroundColor: '#76fffa'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#4dceff'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#40b1ff'}} />
                    </View>
                </View>
                {/*justifyContent enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around')*/}
                <View style={{flex:1, flexDirection:'column'}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <View style={{width: 50, height: 10, backgroundColor: '#f7ff7c'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ebff31'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ffdf12'}} />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                        <View style={{width: 50, height: 10, backgroundColor: '#f7ff7c'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ebff31'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ffdf12'}} />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <View style={{width: 50, height: 10, backgroundColor: '#f7ff7c'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ebff31'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ffdf12'}} />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{width: 50, height: 10, backgroundColor: '#f7ff7c'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ebff31'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ffdf12'}} />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View style={{width: 50, height: 10, backgroundColor: '#f7ff7c'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ebff31'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ffdf12'}} />
                    </View>
                </View>
               {/*alignItems enum('flex-start', 'flex-end', 'center', 'stretch')*/}
                <View style={{flex:1, flexDirection:'column'}}>
                    <View style={{flex: 1, alignItems: 'flex-start'}}>
                        <View style={{width: 50, height: 10, backgroundColor: '#ffb093'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ff5459'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ff1722'}} />
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <View style={{width: 50, height: 10, backgroundColor: '#ffb093'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ff5459'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ff1722'}} />
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <View style={{width: 50, height: 10, backgroundColor: '#ffb093'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ff5459'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ff1722'}} />
                    </View>
                    <View style={{flex: 1, alignItems: 'stretch'}}>
                        <View style={{width: 50, height: 10, backgroundColor: '#ffb093'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ff5459'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ff1722'}} />
                    </View>
                </View>
                {/*alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch')*/}
                <View style={{flex:1, flexDirection:'column'}}>
                    <View style={{flex: 1, alignSelf: 'flex-start'}}>
                        <View style={{width: 50, height: 10, backgroundColor: '#ff94f6'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ff51cf'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ff0bb9'}} />
                    </View>
                    <View style={{flex: 1, alignSelf: 'center'}}>
                        <View style={{width: 50, height: 10, backgroundColor: '#ff94f6'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ff51cf'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ff0bb9'}} />
                    </View>
                    <View style={{flex: 1, alignSelf: 'flex-end'}}>
                        <View style={{width: 50, height: 10, backgroundColor: '#ff94f6'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ff51cf'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ff0bb9'}} />
                    </View>
                    <View style={{flex: 1, alignSelf: 'auto'}}>
                        <View style={{width: 50, height: 10, backgroundColor: '#ff94f6'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ff51cf'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ff0bb9'}} />
                    </View>
                    <View style={{flex: 1, alignSelf: 'stretch'}}>
                        <View style={{width: 50, height: 10, backgroundColor: '#ff94f6'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ff51cf'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#ff0bb9'}} />
                    </View>
                </View>
                {/*flexWrap enum('wrap', 'nowrap')*/}
                <View style={{flex:1, flexDirection:'column'}}>
                    <View style={{flex: 1, flexWrap: 'wrap'}}>
                        <View style={{width: 50, height: 10, backgroundColor: '#8bff95'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#55ff5a'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#15ff0d'}} />
                    </View>
                    <View style={{flex: 1, flexWrap: 'nowrap'}}>
                        <View style={{width: 50, height: 10, backgroundColor: '#8bff95'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#55ff5a'}} />
                        <View style={{width: 50, height: 10, backgroundColor: '#15ff0d'}} />
                    </View>
                </View>
            </View>
        );
    }
}



