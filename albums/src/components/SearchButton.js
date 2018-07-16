import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//check react-native docs for Touchable (button) event
//children = the component within the parent (ie text in AlbumDetail component)
const SearchButton = ({ handleSearchSubmit }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity style={buttonStyle} onPress={handleSearchSubmit}>
      <Text style={textStyle}>
        Search
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    width: 75,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
  },

}

export default SearchButton;