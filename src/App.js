import React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import DailyWrite from './pages/DailyWrite';

const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    console.log("App 실행됨!");
  }, []); // ✅ 의존성 배열 추가해서 처음 한 번만 실행되게 하기
  
  console.log("start");
  console.log(Home);

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="DailyWrite" component={DailyWrite} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
