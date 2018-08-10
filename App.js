import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import HomeScreen from '@navigation/HomeScreen';
import InfoScreen from '@navigation/InfoScreen';
import SettingsScreen from '@navigation/SettingsScreen';
import CloudScreen from '@navigation/CloudScreen';

export default class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'music', title: 'Music', icon: 'queue-music' },
      { key: 'albums', title: 'Albums', icon: 'album' },
      { key: 'recents', title: 'Recents', icon: 'history' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: HomeScreen,
    albums: InfoScreen,
    recents: SettingsScreen,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}