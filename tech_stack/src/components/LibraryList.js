import React, { Component } from 'react';
//FlatList figures out which items on the list is visible at the time and load them (better for memory)
import { FlatList } from 'react-native';
//connects component to the store so we can retrieve the state
import { connect } from 'react-redux';
import ListItem from './ListItem';


const mapStateToProps = (state) => {
  return { libraries: state.libraries };
};

class LibraryList extends Component {

  renderItem(library) {
    return <ListItem library={library} />
  }

  render() {
    //keyExtractor is the unique key identifier when mapping
    return (
      <FlatList
        keyExtractor={(library) => library.id}
        data={this.props.libraries}
        renderItem={this.renderItem}
      />
    )
  }
};

export default connect(mapStateToProps)(LibraryList);
