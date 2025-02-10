import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import App from './App';

console.log("Index.js Loaded"); // 실행 여부 확인

registerRootComponent(App);

