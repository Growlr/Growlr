import React from 'react';
import {StyleSheet} from 'react-native';

    const Mystyles = StyleSheet.create({
        chatImage: {
            width: 58,
            height: 58,
            margin: 15,
            borderRadius: 30,
            marginBottom: 0
        },
        profile: {
            position: 'absolute',
            top: 15,
            left: 10,
            width: 20,
            height: 27
        },
        input: {
            width: 355,
            height: 35,
            borderRadius: 5,
            backgroundColor: '#EEE9E9',
            margin: 10,
            marginTop: 80,
            textAlign: 'center'
        },
        match: {
            color: '#F16A6A',
            fontSize: 18,
            marginLeft: 15,
            marginRight: 15,
            marginTop: 15
        },
        matchImage: {
            width: 80,
            height: 80,
            margin: 15,
            borderRadius: 40
        },
        matchName: {
            marginLeft: 110,
            position: 'absolute',
            top: 30,
            fontSize: 22
        },
        moreInfo: {
            marginLeft: 110,
            position: 'absolute',
            top: 60,
            borderColor: 'gray'
        },
        topBorder: {
            alignItems: 'center',
            borderTopWidth: 0.5,
            borderTopColor: 'lightgray'
        },
        bottomBorder: {
            borderBottomWidth: 0.4,
            borderBottomColor: 'lightgray'
        },
        modalBackground: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            height: 1000
        },
        modalContainer: {
            backgroundColor: '#FFF',
            padding: 32,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 250,
            marginBottom: 250,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 5
        },
        closeModal: {
            color: '#F16A6A',
            fontWeight: 'bold',
            borderWidth: 1,
            borderColor: '#F16A6A',
            padding: 5,
            borderRadius: 5,
            position: 'absolute',
            top: -12,
            left: -138
        },
        tapCall: {
            color: '#F16A6A',
            paddingTop: 25,
            fontSize: 20
        }
    })
export default Mystyles;
