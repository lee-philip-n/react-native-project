// Import a library to help create a component
import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import SearchSection from './src/components/SearchSection';
import AlbumList from './src/components/AlbumList';

// Create a component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    }
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  //make ajax request to API for data.
  handleSearchSubmit(input) {
    this.setState({
      searchInput: input,
    });
  }

  //style={{ flex: 1 }} is necessary so everything shows up when scrolling
  render() {
    return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <SearchSection handleSearchSubmit={this.handleSearchSubmit} />
      <AlbumList />
    </View>
    );
  }
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
