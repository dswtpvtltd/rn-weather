import React, {useEffect} from 'react';
import {RootStackParamList} from '../../types';
import AppNavigator from '../index';
import HomeScreen from '../HomeScreen';
import {View} from 'react-native';
import {render, waitFor} from '@testing-library/react-native';
import {useNavigation} from '@react-navigation/native';
import WeatherScreen from '../WeatherScreen';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type NavigationType = NativeStackNavigationProp<
  RootStackParamList,
  'Home',
  undefined
>;

jest.mock('../HomeScreen', () => jest.fn());
jest.mock('../WeatherScreen', () => jest.fn());

describe('AppNavigator', () => {
  test('should render HomeScreen as default', async () => {
    (HomeScreen as jest.Mock).mockReturnValueOnce(
      <View testID={'mock-home-screen'} />,
    );
    const wrapper = render(<AppNavigator />);
    await waitFor(() => {
      wrapper.getByTestId('mock-home-screen');
    });
  });

  test("should render WeatherScreen on 'Weather' route", async () => {
    (HomeScreen as jest.Mock).mockImplementationOnce(() => {
      const navigation = useNavigation<NavigationType>();
      useEffect(() => {
        navigation.navigate('Weather');
      }, [navigation]);
      return null;
    });

    (WeatherScreen as jest.Mock).mockReturnValueOnce(
      <View testID="mock-weather-screen" />,
    );
    const wrapper = render(<AppNavigator />);
    await waitFor(() => {
      wrapper.getByTestId('mock-weather-screen');
    });
  });
});
