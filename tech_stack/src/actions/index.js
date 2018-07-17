//function is an action creator
//export many things just use the export keyword (connects to "import * as actions from '../actions';"")
export const selectLibrary = (selectedLibraryId) => {
  return {
    type: 'select_library',
    payload: selectedLibraryId
  };
};