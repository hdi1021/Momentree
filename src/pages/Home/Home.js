import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { format, addDays, startOfToday } from 'date-fns';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from "expo-font";
import Locale from './Local';
import styles from './HomeStyles';


const todayString = format(startOfToday(), 'yyyy-MM-dd');

const Home = () => {
  
  const navigation = useNavigation();

  // 오늘 날짜로 초기값 설정
  const [posts, setPosts] = useState([{ id: 1, date: todayString }]);
  const [selectedDate, setSelectedDate] = useState(todayString);

  // 현재 연도와 월 상태 저장 (사용 안할 경우 제거 가능)
  const [{ year, month }, setYearMonth] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  });

  // 0시마다 posts 자동 업데이트
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() === 0) {
        setPosts([{ id: 1, date: format(addDays(new Date(), 1), 'yyyy-MM-dd') }]);
      }
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // markedDates 계산 최적화 (JS로 타입 단언 제거)
  const markedDates = useMemo(() => {
    return posts.reduce((acc, { date }) => {
      acc[date] = { marked: true };
      return acc;
    }, {});
  }, [posts]);

  // 선택 날짜 표시
  const markedSelectedDates = useMemo(() => ({
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  }), [markedDates, selectedDate]);

  // 월 변경 핸들러
  const handleMonthChange = useCallback((monthObj) => {
    setYearMonth({ year: monthObj.year, month: monthObj.month });
  }, []);

  // 일지 작성 화면 이동
  const goToJournal = useCallback(() => {
    navigation.navigate('DailyWrite');
  }, [navigation]);

  // 커스텀 Day 컴포넌트
  const renderDay = useCallback(({ date, state, marking }) => (
    <View
      style={[
        date.dateString === selectedDate ? marking?.selectedStyle || {} : {},
        styles.dayContainer
      ]}
    >
      <TouchableOpacity
        disabled={state === 'disabled'}
        style={state === 'disabled' ? styles.disableDate : styles.enableDate}
        onPress={() => setSelectedDate(date.dateString)}
      >
        <View style={[marking?.todayStyle || {}, styles.dayInner]}>
          <Text style={styles.dayText}>{date.day}</Text>
        </View>
      </TouchableOpacity>
    </View>
  ), [selectedDate]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.coin}>
          <Image source={require('../../assets/start.png')} style={styles.star} />
          <Text style={styles.coinCount}>0</Text>
        </View>
        <Image source={require('../../assets/search.png')} style={styles.search} />
        <Image source={require('../../assets/alarm.png')} style={styles.alarm} />
      </View>
      <View style={styles.body}>
        <Calendar
          style={styles.calendar}
          markedDates={markedSelectedDates}
          monthFormat={'yyyy년 MM월'}
          enableSwipeMonths
          dayComponent={renderDay}
          theme={{
            selectedDayBackgroundColor: '#009688',
            arrowColor: '#454545',
            dotColor: '#009688',
            todayTextColor: '#009688',
            monthTextColor: '#454545',
            textMonthFontSize: 20,
            textMonthFontWeight: 'bold',
            dayTextColor: '#454545',
            calendarBackground: '#FAFAFA',
            'stylesheet.day.basic': {
              bpaddingVertical: 20,
              paddingHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
            },
            text: {
              fontSize: 16,
              color: '#454545',
            },
          }}
          onDayPress={day => setSelectedDate(day.dateString)}
          onMonthChange={handleMonthChange}
        />
        <TouchableOpacity
          onPress={goToJournal}
          style={styles.journalButton}
        >
          <Text style={styles.journalButtonText}>일기 작성하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

