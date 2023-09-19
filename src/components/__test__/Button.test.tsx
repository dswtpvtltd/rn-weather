import React from 'react';
import Button from '../Button';
import {fireEvent, render} from '@testing-library/react-native';

describe('Button', () => {
  test('should render correctly', () => {
    const wrapper = render(<Button label="aaaa" onPress={jest.fn()} />);
    wrapper.getByTestId('button');
  });

  test('should render loader when loading', () => {
    const wrapper = render(
      <Button label="aaaa" onPress={jest.fn()} loading={true} />,
    );
    wrapper.getByTestId('button-loading');
  });
  test('should call given onPrss when clicked', () => {
    const mockOnPress = jest.fn();
    const wrapper = render(<Button label="aaaa" onPress={mockOnPress} />);
    const button = wrapper.getByTestId('button');

    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });
  test('should render label', () => {
    const wrapper = render(<Button label="mock-label" onPress={jest.fn()} />);
    wrapper.getByText('mock-label');
  });
  test('should accept custom view props', () => {
    const wrapper = render(
      <Button label="mock-label" onPress={jest.fn()} testID="mock-test-id" />,
    );
    wrapper.getByTestId('mock-test-id');
  });
});
