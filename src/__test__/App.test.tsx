import {describe} from 'node:test';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import AppNavigator from '../screens';
import {View} from 'react-native';
import {render} from '@testing-library/react-native';

jest.mock('../screens', () => jest.fn());

function add(a: number, b: number): number {
  return a + b;
}

describe('App', () => {
  test('first test', () => {
    expect(add(2, 2)).toBe(4);
  });
  test('Shoud render', () => {
    renderer.create(<App />);
  });
  test('should render routes', () => {
    (AppNavigator as jest.Mock).mockReturnValueOnce(
      <View testID="mock-screen" />,
    );
    const wrapper = render(<App />);
    wrapper.getByTestId('mock-screen');
  });
});
