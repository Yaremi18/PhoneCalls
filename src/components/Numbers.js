import React from 'react';
import {
    Platform, StyleSheet, FlatList, Text, View, Image, TouchableHighlight,
    NativeModules, Button, TextInput, TouchableWithoutFeedback, Keyboard, Input
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Numbers = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
            </View>
            <View style={styles.row}>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
            </View>
            <View style={styles.row}>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
            </View>
            <View style={styles.row}>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row:{
        flex: 1,
        flexDirection: 'row'
    },
    numTel: {
        color: '#64696d',
        textAlign: 'center',
        fontFamily: 'sans-serif-light',
        fontSize: 32,
    }
});

export default Numbers;