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
            top: 16,
            left: 20,
            width: 15,
            height: 18
        },
        matches: {
            position: 'absolute',
            top: 16,
            right: 20,
            width: 19,
            height: 21
        },
        navbar: {
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          backgroundColor: '#f5f5f5',
          alignItems: 'center',
          paddingTop: 10,
          paddingBottom: 10,
          height: 64,
          borderBottomWidth: 0.4,
          borderBottomColor: 'lightgray',
          shadowColor: '#CBCBCB',
          shadowOffset: {
            height: 0.5
          },
          shadowRadius: 1,
          shadowOpacity: 250
        }
    })
export default NavStyles;
