import React, {useRef} from 'react';
import AppNavigator from './screens/index';
import Child, {ChildActions} from './Child';
import Childcopy from './Childcopy';
import {Button} from 'react-native';

const App = () => {
  const childRef = useRef<ChildActions | null>(null);
  const sayHi = () => {
    if (childRef.current) {
      childRef.current.sayHi();
    }
  };
  const sayHello = () => {
    if (childRef.current) {
      childRef.current?.sayHello();
    }
  };
  const sayTata = () => {
    if (childRef.current) {
      childRef.current.sayTata();
    }
  };
  return (
    <>
      <Child name={'vidya'} ref={childRef} />
      <Childcopy />
      <Button title="Say Hi" onPress={sayHi} />
      <Button title="Say Hello" onPress={sayHello} />
      <Button title="Say Tata" onPress={sayTata} />
      <AppNavigator />
    </>
  );
};

export default App;
