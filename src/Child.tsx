import React, {forwardRef, useImperativeHandle} from 'react';
import {Text, View, Alert} from 'react-native';

interface ChildProps {
  name: string;
}

export interface ChildActions {
  sayHi: () => void;
  sayHello: () => void;
  sayTata: () => void;
}

const Child = forwardRef<ChildActions, ChildProps>((props, ref) => {
  const sayHi = () => {
    Alert.alert('sayHi');
  };
  const sayHello = () => {
    Alert.alert('sayHello');
  };
  const sayTata = () => {
    Alert.alert('sayTata');
  };
  useImperativeHandle(ref, () => ({
    sayHi,
    sayHello,
    sayTata,
  }));

  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
});

export default Child;
