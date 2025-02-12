import React from 'react';
import { StyleSheet, Text, View ,Image, TextInput, Touchable} from 'react-native';

const DailyWrite = ({route,navigation}) => {

  console.log("start")

  return (
    <View style={{flex:1}}>
      <View style={styles.header}>
        <Image/>
        <Text>2024년 2월 11일</Text>
      </View>
      <View >
        <Touchable>
          <Image />
        </Touchable>
      </View>
      <View>
        <TextInput/>
      </View>
      <View>
        <Touchable/>
        <Touchable/>
        <Touchable/>
        <Touchable/>
        <Touchable/>
        <Touchable/>
      </View>
    </View>
  );
}
export default DailyWrite;

const styles = StyleSheet.create({
  header : {
    flex : 1
  },
  imojiView : {
    flex : 2,
    justifyContent : "center"
  },
  imoji:{

  }

});
