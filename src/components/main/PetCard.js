import React, { Component } from 'react'
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'
import {StyleSheet, Text, Image, View, TextInput, ScrollView, Dimensions} from 'react-native'
import { mainStyle } from './mainStyle'



 const PetCard = (props) => {
   let {width, height} = Dimensions.get('window')

  return(
    <ScrollView>

      <Image
        alignSelf='center'
        style={{width: width-10, height: height-200}}
        source={{uri: props.imageUrl}}
      />
      <Text>{props.name}, {props.age}</Text>
      <Text>{props.shortDesc}</Text>

    </ScrollView>
  )
}

export {PetCard}
