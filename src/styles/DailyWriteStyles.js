
import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    height: height * 0.1,
    backgroundColor: "#FAFAFA",
    flexDirection: "row",
  },
  headerText: {
    fontFamily: "Font",
    fontSize: 20,
  },
  headerTextView: {
    flex: 3,
    justifyContent: 'center',
    alignItems: "center",
  },
  backButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  writeFinish: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  imojiView: {
    flex: 1,
    minHeight: 100,
    maxHeight: 100,
    justifyContent: "center",
    backgroundColor: "#FAFAFA",
    alignItems: "center",
  },
  imoji: {
    width: 100,
    minHeight: 100,
    maxHeight: 100,
  },
  inputTextArea: {
    flex: 6,
    backgroundColor: "#FAFAFA",
  },
  inputText: {
    margin: 10,
  },
  TextOption: {
    flex: 0.5,
    minHeight: 30,
    maxHeight: 50,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
  },
  TextOptionIcon: {
    flex: 1,
  },
});

export default styles;