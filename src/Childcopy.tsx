import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

interface ChildProps {}

type MyState = {
  count: number; // like this
};

class Childcopy extends Component<ChildProps, MyState> {
  state: MyState = {
    count: 0,
  };
  increase = () => {
    this.setState({count: this.state.count + 1});
  };
  descrease = () => {
    this.setState({count: this.state.count - 1});
  };

  shouldComponentUpdate(
    nextProps: Readonly<ChildProps>,
    nextState: Readonly<MyState>,
  ): boolean {
    if (nextState.count <= 0) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <View>
        <Text>{this.state.count}</Text>
        <Button title="Increase" onPress={() => this.increase()} />
        <Button title="Descrease" onPress={() => this.descrease()} />
      </View>
    );
  }
}

export default Childcopy;
