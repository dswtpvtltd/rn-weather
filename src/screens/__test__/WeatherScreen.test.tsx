import {render} from '@testing-library/react-native';
import React from 'react';
import WeatherScreen from '../WeatherScreen';

describe('WeatherScreen', () => {
  test('should render correctly', () => {
    const wrapper = render(<WeatherScreen />);
    wrapper.getByTestId('weather-screen');
  });
});
