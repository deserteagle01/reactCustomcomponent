import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


type Props = {};
export default class GeneralButton extends Component<Props> {
  render() {
    const {onPress, backColor, mtop, width, height, title} = this.props;
    return (
        <TouchableOpacity
            style={{backgroundColor:backColor,marginTop:mtop,width:width,height:height,borderRadius:20,alignItems:'center',justifyContent:'center'}}
            onPress={onPress}>
                <Text>{title}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
