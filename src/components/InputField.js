import React from 'react';
import {
    Platform, StyleSheet, FlatList, Text, View, Image, TouchableHighlight,
    NativeModules, Button, TextInput, TouchableWithoutFeedback, Keyboard, Input
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const InputField = (props) => {
    return (
        <View style={styles.view}>
            <View>
                <Text>{props.numbers}</Text>
            </View>
            <View>
                <Icon name="backspace" size={30} color={"#000000"} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    numTel: {
        color: '#64696d',
        textAlign: 'center',
        fontFamily: 'sans-serif-light',
        fontSize: 32,
    }
});

export default InputField;