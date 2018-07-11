// Import a library to help create a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';


// Create a Class Component
class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    }
  }

  //lifecycle event - componentWillMount loads after app (HTTP requests)
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({
        albums: response.data,
      }));
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  };
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
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
};

// Make component available to other parts of the app
export default AlbumList;