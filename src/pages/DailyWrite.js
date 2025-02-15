import React from 'react';
import { Dimensions,StyleSheet, Text, View ,Image, TextInput, TouchableOpacity} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { getFormattedDate } from '../hoooks/getFormettedDate';
import { useFonts } from "expo-font";
import { StatusBar } from 'expo-status-bar';

const { height } = Dimensions.get('window');

const DailyWrite = ({route,navigation}) => {

  const Date = getFormattedDate();
  const [fontsLoaded] = useFonts({
    Font: require("../assets/fonts/온글잎 언즈체.ttf"),
  });
  
  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <StatusBar />
        <View style={{flex:1}}>
          <View style={styles.header}>
            <View style={styles.backButton}>
              <TouchableOpacity 
                style={{flex:0.5, minWidth:20,maxWidth:30, minHeight:20,maxHeight:30,marginRight:10}}
                onPress={() => navigation.navigate("Home")}
              >
                <Image/>
              </TouchableOpacity>
            </View>
            <View style={styles.headerTextView}>
              <Text style={styles.headerText}>{Date}</Text>
            </View>
            <View style={styles.writeFinish}>
              <TouchableOpacity style={{flex:0.5, minWidth:30,maxWidth:40, minHeight:30,maxHeight:40}}>
                <Image/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.imojiView}>
            <TouchableOpacity>
              <Image source={require("../assets/emoji/기쁘미.png")} style ={styles.imoji}/>
            </TouchableOpacity>
          </View>
          <View style={styles.inputTextArea}>
            <TextInput 
            placeholder='오늘 하루를 글로 남겨보세요'
            multiline
            style = {styles.inputText}
            />
          </View>
            <View style={styles.TextOption}>
              <TouchableOpacity style={styles.TextOptionIcon}/>
              <TouchableOpacity style={styles.TextOptionIcon}/>
              <TouchableOpacity style={styles.TextOptionIcon}/>
              <TouchableOpacity style={styles.TextOptionIcon}/>
              <TouchableOpacity style={styles.TextOptionIcon}/>
              <TouchableOpacity style={styles.TextOptionIcon}/>
              <TouchableOpacity style={styles.TextOptionIcon}/>
            </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default DailyWrite;

const styles = StyleSheet.create({
  header : {
    height : height*0.1,
    backgroundColor : "#FAFAFA",
    flexDirection: "row"
  },
  headerText:{
    fontFamily : "Font",
    fontSize : 20,
  },
  headerTextView:{
    flex:3,
    justifyContent : 'center',
    alignItems: "center",
  },
  backButton:{
    flex:1,
    justifyContent : 'center',
    alignItems: "center",
  },
  writeFinish:{
    flex:1,
    justifyContent : 'center',
    alignItems: "center",
  },
  imojiView : {
    flex : 1,
    minHeight:100,
    maxHeight : 100,
    justifyContent : "center",
    backgroundColor : "#FAFAFA",
    alignItems : "center"
  },
  imoji:{
    width : 100,
    minHeight:100,
    maxHeight : 100,
  },
  inputTextArea:{
    flex : 6,
    backgroundColor : "#FAFAFA"
  },
  inputText:{
    margin : 10
  },
  TextOption:{
    flex:0.5,
    minHeight:30,
    maxHeight:50,
    flexDirection:'row',
    marginLeft : 20,
    marginRight : 20
  },
  TextOptionIcon : {
    flex:1
  }

});
