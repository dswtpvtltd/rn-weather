import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../constants';
import moment from 'moment';
import WeatherCurrent from '../components/WeatherCurrent';
import WeatherCoordinates from '../components/WeatherCoordinates';

const HomeScreen = () => {
  const now = moment(new Date());
  // const formateDate = (date: Date) => {
  //   const today = date.getDate();
  //   const month = [
  //     'Jan',
  //     'Feb',
  //     'Mar',
  //     'Apr',
  //     'May',
  //     'Jun',
  //     'Jul',
  //     'Aug',
  //     'Sep',
  //     'Oct',
  //     'Nov',
  //     'Dec',
  //   ][date.getMonth()];
  //   return `${month} ${today}, ${date.getFullYear()}`;
  // };

  return (
    <View style={styles.container} testID="home-screen">
      <View style={styles.title}>
        <Text style={styles.date}>Home Screen</Text>
        <Text style={styles.date}>{now.format('MMM DD, YYYY')}</Text>
        <Text style={styles.date}>{now.format('dddd')}</Text>
      </View>
      <WeatherCurrent />
      <Text testID="home-screen-divider" style={styles.divider}>
        or
      </Text>
      <WeatherCoordinates />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
  },
  title: {
    justifyContent: 'flex-end',
  },
  date: {
    color: COLORS.RED,
    fontSize: 16,
  },
  divider: {
    color: COLORS.RED,
    textAlign: 'center',
  },
});

export default HomeScreen;
