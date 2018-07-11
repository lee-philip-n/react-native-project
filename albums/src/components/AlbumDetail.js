// Import a library to help create a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';

const AlbumDetail = (props) => {
  const { title, url, image } = props.album;
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text>{title}</Text>
    </View>
  )
}

//CSS - uses flexbox properties
const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
};

export default AlbumDetail;