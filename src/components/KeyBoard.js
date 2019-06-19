
import React from 'react';
import {
    Vibration, ToastAndroid,
    Platform, StyleSheet, FlatList, Text, View, Image, TouchableHighlight,
    NativeModules, Button, TextInput, TouchableWithoutFeedback, Keyboard, Input, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SystemSetting from 'react-native-system-setting'

const Sound = require('react-native-sound');
const soundCorrect = require('../../resources/audios/Hola.mp3');
const soundIncorrect = require('../../resources/audios/Bye.mp3');

export default class KeyBoard extends React.Component {

    state = {
        cad: '',
        number: '123456789',
        disabledButtonCall: false
    }
    onTextPress(event, text) {
        let cad = this.state.cad;

        if (cad.length < 10) {
            this.setState({
                cad: cad + text
            })
        } else {
            console.log('Ya no se pueden insertar mas numeros');
        }
        console.log(this.state.cad);

    }

    callToNumber = () => {
        Vibration.vibrate(100);
        if(!this.state.cad)
            ToastAndroid.show('Escribe un número teléfonico por favor.', ToastAndroid.SHORT);
        else{
        if (this.state.cad === this.state.number) {
            this.setState({disabledButtonCall:true});
            //Reproducir audio
            ToastAndroid.show('El número es correcto', ToastAndroid.SHORT);
            this.playSound(true);
            this.setState({disabledButtonCall:false});
        } else {
            this.setState({disabledButtonCall:true});
            ToastAndroid.show('El número es incorrecto', ToastAndroid.SHORT);            
            this.playSound(false);
            this.setState({disabledButtonCall:false});
        }
    }
    }

    playSound = (correct) => {
        SystemSetting.setVolume(1);
        const audio = correct ? soundCorrect : soundIncorrect;
        let final = new Sound(audio, (e) => {
            if (e) {
                console.log('error', e);
                return;
            }
            final.play();
        });
    }

    createButton(start, end) {
        let tags = []
        for (let i = start; i <= end; i++) {
            let value = i == 10 ? '*' : i == 11 ? 0 : i == 12 ? '#' : i;
            tags.push(
                <View key={String(value)} style={styles.buttonContainer}>
                    <TouchableHighlight underlayColor='transparent' onPress={() => { Vibration.vibrate(100); this.setState({ cad: this.state.cad + value })}}>
                        <Text style={styles.numTel}>{String(value)}</Text>
                    </TouchableHighlight>
                </View>);
        }

        return tags;
    }

    backSpace = () => {
        Vibration.vibrate(100);
        if (this.state.cad.length !== 0) {
            this.setState({
                cad: this.state.cad.slice(0, -1)
            });
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent:'flex-end'}}>
                <View style={styles.container1}>
                    <View style={{marginRight: 10}}>
                        <Text                       
                            style={styles.numTel1}
                        >{this.state.cad}</Text>
                    </View>
                    <TouchableHighlight key='back'
                                underlayColor='transparent'
                                onPress={this.backSpace}>
                        <View>
                            <Icon name="backspace" size={25} color="#BBC0C4" />
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={styles.delimiter}>

                </View>

                <View style={styles.container}>
                    <View style={styles.rowButton}>
                        {this.createButton(1, 3)}
                    </View>
                    <View style={styles.rowButton}>
                        {this.createButton(4, 6)}
                    </View>
                    <View style={styles.rowButton}>
                        {this.createButton(7, 9)}
                    </View>
                    <View style={styles.rowButton}>
                        {this.createButton(10, 12)}
                    </View>
                    <View style={{ flex: 0, flexDirection: 'row', margin:20 }}>
                        <TouchableHighlight
                            disabled={this.state.disabledButtonCall}
                            key='call'
                            underlayColor='green'
                            onPress={this.callToNumber}
                            style={styles.roundIcon}>
                            <Icon name="phone" size={30} color="white" />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container1: {
        //flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
       // justifyContent: 'center',
        
    },
    roundIcon: {
        borderWidth: 1,
        borderColor: '#37C837',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#37C837',
        borderRadius: 50,

    },
    buttonContainer: {
        flex: 1,
        margin: 1
    },
    rowInput: {
        /*width:'100%',
        margin:5,
        flex:1,
        flexDirection:'row',
        alignSelf: 'flex-end'*/
        flexDirection: 'row'
    },
    rowButton: {
        /*flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',*/
        flexDirection: 'row',
    },
    separator: {
        marginBottom: 15
    },
    delimiter: {
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        margin:10,
       // height: 30
    },
    img: {
        width: 64,
        height: 64,
    },
    numTel: {
        color: '#0078d7',
        textAlign: 'center',
        fontFamily: 'sans-serif-light',
        fontSize: 32,
    },
    numTel1: {
        color: '#64696d',
        textAlign: 'center',
        fontFamily: 'sans-serif-light',
        fontSize: 32,
        width: 250
    },

})