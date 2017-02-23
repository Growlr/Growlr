import React from 'react';
import {StyleSheet} from 'react-native';

    const NavStyles = StyleSheet.create({
        main: {
            width: 23,
            height: 30,
            margin: 12,
            borderRadius: 10,
            marginBottom: 0
        },
        profile: {
            position: 'absolute',
            top: 14,
            left: 20,
            width: 18,
            height: 24
        },
        matches: {
            position: 'absolute',
            top: 14,
            right: 20,
            width: 18,
            height: 24
        },
        navbar: {
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          backgroundColor: '#eee',
          alignItems: 'center',
          paddingTop: 10,
          paddingBottom: 10,
          height: 60,
          borderBottomWidth: 0.4,
          borderBottomColor: 'lightgray'
        }
    })
export default NavStyles;
