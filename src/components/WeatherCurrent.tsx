import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import LocationService from '../services/LocationService';
import Button from './Button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';

type NavigationType = NativeStackNavigationProp<
  RootStackParamList,
  'Weather',
  undefined
>;

const WeatherCurrent = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NavigationType>();
  const handleFetchWeather = useCallback(async () => {
    setLoading(true);
    const position = await LocationService.getCurrentPosition();
    navigation.navigate('Weather', {
      latitude: position.latitude,
      longitude: position.longitude,
    });
  }, [navigation]);
  return (
    <Button
      testID="weather-current"
      label="Weather at my position"
      onPress={handleFetchWeather}
      loading={loading}
    />
  );
};

export default WeatherCurrent;
