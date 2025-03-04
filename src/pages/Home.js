import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity,Dimensions} from 'react-native';
import {Calendar} from 'react-native-calendars'


const baseDisignScreenSize = 375;


const Home = ({route,navigation}) => {

  console.log("start")
  useEffect(() => {

  }, []);

  return (
    <View style={{flex:1}}>
      <View style={styles.Header}>
        <View style={styles.coin}>
          <Image source={require("../assets/start.png")} style={styles.star}/> 
          <Text style={styles.coinCount}>0</Text>
        </View>
        <Image source={require('../assets/search.png')} style={styles.search}/>
        <Image source={require('../assets/alarm.png')} style={styles.alram}/>
      </View>

      <View style={styles.body}>
        {/* <TouchableOpacity style={{height: "25%"}} onPress={()=> navigation.navigate("DailyWrite")}/> */}
        <View>
        <Calendar style={{width: 370 , height: 630}}>
            current={'2025-03-04'}
            onDayPress{(day) =>{
              console.log('선택된 날 ', day);
          }} 
            monthFormat ={'yyyy MM'}
            hideExtraDays ={true}
            firstDay={1}
            theme={{
            textDayFontSize: 16, // 날짜 폰트 크기 조정
            textDayStyle: { textAlign: "center" }, // 중앙 정렬
          }}
        </Calendar>
        </View>
      </View>
      
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  Header:{
    flex:1,
    backgroundColor: "#FFFFFF",
  },
  body:{
    flex:6.5,
    backgroundColor: "#FAFAFA",
  },
  coin:{
    width:'15%',
    height:'25%',
    backgroundColor:"#C8F4ED",
    borderRadius : 50,
    justifyContent:"flex-start",
    marginTop:50,
    marginLeft:20
  },
  star:{
    width: "55%",
    height: "90%",
    marginTop:1,
    resizeMode: "contain",

  },
  coinCount:{
    position: "absolute",
    marginLeft: 35,
    marginTop:2,
    fontWeight:700,
    fontSize:20,
  },
  search:{
    width:'18%',
    height:'18%',
    marginLeft:265,
    marginTop: -20,
    resizeMode: "contain",
    
  },
  alram:{
    width:'18%',
    height:'20%',
    marginLeft:310,
    marginTop: -20,
    resizeMode: "contain",
  },
  title:{
    marginTop: 20,
    marginLeft:100,
    fontSize:30,
    fontWeight:600,

  },
  arrow:{
    width:25,
    height:23,
    marginLeft:275,
    marginTop:-25
  },

});
