# react-native-project

React Native Installation:
1) download/install/update XCodes
2) install or update ('brew update') Homebrew 
3) install node ('brew install node') [need at least node v4.5 for react-native]
4) install watchman ('brew install watchman')
5) install react-native cli ('npm install -g react-native-cli')

Setup React Native Project:
1) run "react-native init [project name]" in the project directory

Start iOS Simulator:
1) run "react-native run-ios" in the project directory
  if error message: 
    "Found Xcode project albums.xcodeproj
    xcrun: error: unable to find utility "instruments", not a developer tool or in PATH

    Command failed: xcrun instruments -s
    xcrun: error: unable to find utility "instruments", not a developer tool or in PATH

  open XCode application > Xcode > preferences... > locations > Command Line Tools > xCode #.#.#