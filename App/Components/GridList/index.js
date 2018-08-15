import * as React from 'react';
import { Checkbox } from 'react-native-paper';

export default class GridList extends React.Component {
  state = {
    checked: false,
  };

  render() {
    const { checked } = this.state;
    return (
      <Checkbox
        checked={checked}
        onPress={() => { this.setState({ checked: !checked }); }}
      />
    );
  }
}