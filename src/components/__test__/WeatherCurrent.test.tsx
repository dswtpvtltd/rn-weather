import {fireEvent, render, waitFor} from '@testing-library/react-native';
import React from 'react';
import WeatherCurrent from '../WeatherCurrent';
import {useNavigation} from '@react-navigation/native';
import LocationService from '../../services/LocationService';
import {act} from 'react-test-renderer';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual<object>('@react-navigation/native'),
    useNavigation: jest.fn().mockReturnValue({navigate: jest.fn()}),
  };
});

describe('WeatherCurrent', () => {
  test('should render correctly', () => {
    const wrapper = render(<WeatherCurrent />);
    wrapper.getByTestId('weather-current');
  });

  test('Should render label', () => {
    const wrapper = render(<WeatherCurrent />);
    wrapper.getByText('Weather at my position');
  });

  test('shoukd navigate toweather screen with location', async () => {
    const mockNavigation = jest.fn();
    (useNavigation as jest.Mock).mockReturnValueOnce({
      navigate: mockNavigation,
    });

    const wrapper = render(<WeatherCurrent />);
    const button = wrapper.getByTestId('weather-current');
    fireEvent.press(button);
    await waitFor(() => {
      expect(mockNavigation).toHaveBeenCalledWith('Weather', {
        latitude: 0,
        longitude: 0,
      });
    });
  });
  describe('Loader', () => {
    test('Should be rendered when position is being fetched', async () => {
      let mockResolve: (position: {
        latitude: number;
        longitude: number;
      }) => void;

      jest.spyOn(LocationService, 'getCurrentPosition').mockImplementationOnce(
        () =>
          new Promise(resolve => {
            mockResolve = resolve;
          }),
      );
      const wrapper = render(<WeatherCurrent />);
      const button = wrapper.getByTestId('weather-current');
      fireEvent.press(button);

      await expect(
        wrapper.findByTestId('button-loading'),
      ).resolves.toBeDefined();
      await act(async () => {
        await mockResolve({latitude: 0, longitude: 0});
      });
    });
  });
});
