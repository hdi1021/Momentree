import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './pages/Home';
import DailyWrite from './pages/DailyWrite';
import { ErrorBoundary } from 'react-error-boundary';
import { Text, View, Button } from 'react-native';

const Stack = createStackNavigator();

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <View>
      <Text>Something went wrong:</Text>
      <Text>{error.message}</Text>
      <Button title="Try again" onPress={resetErrorBoundary} />
    </View>
  );
}

const App = () => {
  console.log("start");
  console.log(Home);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="DailyWrite" component={DailyWrite} />
        </Stack.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  );
};

export default App;
