import React from 'react';
import { StyleSheet, Text, View ,Image, Touchable} from 'react-native';



module.exports = {
    assets: ['../assets/fonts/'],
  };
  
const Home = ({route,navigation}) => {

  console.log("start")
  useEffect(() => {

  }, []);

  const moveDailyWriteScreen = () => {
    navigation.navigate('DailyWrite');
}

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
        <Text>2025년 2월 6일</Text>
      </View>
      <View style={styles.footer}></View>
      <Touchable onPress={()=> navigation.navigate("DailyWrite")}>

      </Touchable>
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
  footer:{
    flex:0.8,

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

});
