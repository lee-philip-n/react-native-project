import React from 'react';
import { TextInput } from 'react-native';

const SearchBar = (props) => {

    return (
      <TextInput
        style={{height: 25, width: 250, borderColor: 'gray', borderWidth: 1}}
        onChangeText={props.handleSearchInput}
      />
    );
}

export default SearchBar;