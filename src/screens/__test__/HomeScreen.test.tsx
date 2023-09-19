import React from 'react';
import HomeScreen from '../HomeScreen';
import {render} from '@testing-library/react-native';
import WeatherCurrent from '../../components/WeatherCurrent';
import {View} from 'react-native';
import WeatherCoordinates from '../../components/WeatherCoordinates';

jest.mock('../../components/WeatherCoordinates', () =>
  jest.fn().mockReturnValue(null),
);
jest.mock('../../components/WeatherCurrent', () =>
  jest.fn().mockReturnValue(null),
);

describe('HomeScreen', () => {
  test('Should render correctly', () => {
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('home-screen');
  });

  describe('Title section', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.setSystemTime(946684800000);
    });
    afterEach(() => {
      jest.useRealTimers();
    });
    test('Should contains current date', () => {
      const wrapper = render(<HomeScreen />);
      wrapper.getByText('Jan 01, 2000');
    });

    test('Should contains current day', () => {
      const wrapper = render(<HomeScreen />);
      wrapper.getByText('Saturday');
    });
  });

  test('should contain a section to get current weather', () => {
    (WeatherCurrent as jest.Mock).mockReturnValue(
      <View testID="mock-weather-current" />,
    );

    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('mock-weather-current');
  });

  test('should contain a divider', () => {
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('home-screen-divider');
  });

  test('should contain a section to get weather at given longitude and latitude', () => {
    (WeatherCoordinates as jest.Mock).mockReturnValue(
      <View testID="mock-weather-coordinates" />,
    );

    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('mock-weather-coordinates');
  });
});
