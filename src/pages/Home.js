import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { format, addDays, startOfToday } from "date-fns";

const Home = ({ navigation }) => {
  // 오늘 날짜 계산
  const today = format(startOfToday(), "yyyy-MM-dd");

  // posts 초기값을 오늘 날짜로 설정
  const [posts, setPosts] = useState([{ id: 1, date: today }]);
  const [selectedDate, setSelectedDate] = useState(today);

  // 현재 연도와 월 상태 저장
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  // 매일 0시에 `posts`를 자동 업데이트하는 useEffect
  useEffect(() => {
    const updatePosts = () => {
      setPosts([{ id: 1, date: format(addDays(new Date(), 1), "yyyy-MM-dd") }]);
    };

    // 자정(00:00)마다 실행되도록 설정
    const interval = setInterval(() => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() === 0) {
        updatePosts();
      }
    }, 60 * 1000); // 1분마다 체크

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 해제
  }, []);

  // markedDates 설정 (자동 변경 반영)
  const markedDates = posts.reduce((acc, current) => {
    acc[current.date] = { marked: true };
    return acc;
  }, {});

  const markedSelectedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    }
  };

  // 캘린더에서 월이 바뀔 때 실행되는 함수
  const handleMonthChange = (monthObj) => {
    setYear(monthObj.year);
    setMonth(monthObj.month);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.Header}>
        <View style={styles.coin}>
          <Image source={require("../assets/start.png")} style={styles.star} />
          <Text style={styles.coinCount}>0</Text>
        </View>
        <Image source={require('../assets/search.png')} style={styles.search} />
        <Image source={require('../assets/alarm.png')} style={styles.alram} />
      </View>

      {/* 제목은 필요 없고, 캘린더에서 월과 년도 자동 변경 */}
      <View style={styles.body}>
        <Calendar 
          style={styles.calendar} 
          markedDates={markedSelectedDates}
          monthFormat={'yyyy년 MM월'} // 캘린더 헤더에 표시될 연도 및 월 형식
          theme={{
            selectedDayBackgroundColor: '#009688',
            arrowColor: '#009688',
            dotColor: '#009688',
            todayTextColor: '#009688',
            arrowColor:'#454545',
            monthTextColor:'#454545',
            textMonthFontSize:20,
            textMonthFontWeight:'bold',
          }} 
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
          }} 
          onMonthChange={handleMonthChange} // 월 변경 시 호출
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Header: { 
    flex: 1, 
    backgroundColor: "#FFFFFF" 
  },
  body: { 
    flex: 6.5,
    backgroundColor: "#FAFAFA" 
  },
  coin: {
    width: '15%',
    height: '25%',
    backgroundColor: "#C8F4ED",
    borderRadius: 50,
    justifyContent: "flex-start",
    marginTop: 50,
    marginLeft: 20
  },
  star: { 
    width: "55%", 
    height: "90%", 
    resizeMode: "contain" 
  },
  coinCount: {
    position: "absolute",
    marginLeft: 35,
    marginTop: 2,
    fontWeight: '700',
    fontSize: 20,
  },
  search: { 
    width: '18%', 
    height: '18%', 
    marginLeft: 265, 
    marginTop: -20, 
    resizeMode: "contain" 
  },
  alram: { 
    width: '18%', 
    height: '20%', 
    marginLeft: 310, 
    marginTop: -20, 
    resizeMode: "contain" 
  },
  calendar: {
    width:370,
    height:670,
  }
});