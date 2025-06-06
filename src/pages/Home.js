import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { format, addDays, startOfToday } from 'date-fns';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from "expo-font";


// 캘린더 로케일 설정 분리
LocaleConfig.locales['kr'] = {
  monthNames: [
    '01월', '02월', '03월', '04월', '05월', '06월',
    '07월', '08월', '09월', '10월', '11월', '12월'
  ],
  monthNamesShort: [
    '01월', '02월', '03월', '04월', '05월', '06월',
    '07월', '08월', '09월', '10월', '11월', '12월'
  ],
  dayNames: [
    '일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'
  ],
  dayNamesShort: [
    '일', '월', '화', '수', '목', '금', '토'
  ],
};
LocaleConfig.defaultLocale = 'kr';

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
          <Image source={require('../assets/start.png')} style={styles.star} />
          <Text style={styles.coinCount}>0</Text>
        </View>
        <Image source={require('../assets/search.png')} style={styles.search} />
        <Image source={require('../assets/alarm.png')} style={styles.alarm} />
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

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flex: 0.5,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 20,
    position: 'relative',
  },
  coin: {
    width: wp('15%'),
    height: hp('3%'),
    backgroundColor: '#C8F4ED',
    borderRadius: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  star: {
    width: '55%',
    height: '90%',
    resizeMode: 'contain',
  },
   coinCount: {
    position: 'absolute',
    left: 38,
    top: 2,
    fontWeight: '700',
    fontSize: 20,
    color: '#454545',
  },
  search: {
    width: wp('5%'),
    height: hp('3.5%'),
    resizeMode: 'contain',
    position: 'absolute',
    alignItems: 'center',
    right: 70,
    top: 50,
  },
  alarm: {
    width: wp('5%'),
    height: hp('3.5%'),
    resizeMode: 'contain',
    position: 'absolute',
    right: 20,
    top: 50,
  },
  body: {
    flex: 6.5,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
  },
  calendar: {
    width: wp('90%'),
    backgroundColor: '#FAFAFA',
  },
  journalButton: {
    padding: 10,
    backgroundColor: 0,
    margin: 20,
    borderRadius: 8,
    width: wp('80%'),
    alignSelf: 'center',
    borderColor: '#ddd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  journalButtonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dayContainer: {
    backgroundColor: 'white',
    width: wp('12%'),
    height: hp('7.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayInner: {
    width: 20,
    height: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayText: {
    fontSize: 10,
  },
  enableDate: {},
  disableDate: { opacity: 0.4 },
});