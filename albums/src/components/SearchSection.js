// Import a library to help create a component
import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';

// Create a Functional Component
class SearchSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    }
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearchInput(input) {
    this.setState({
      searchText: input,
    });
  }

  render() {
    const { viewStyle } = styles;

    return (
      <View style={viewStyle}>
        <SearchBar handleSearchInput={this.handleSearchInput} />
        <SearchButton handleSearchSubmit={() => this.props.handleSearchSubmit(this.state.searchText)} />
      </View>
    );
  }
};

//CSS - uses flexbox properties
const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
};

// Make component available to other parts of the app
export default SearchSection;