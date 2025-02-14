import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';
import Home from './pages/Home';
import DailyWrite from './pages/DailyWrite';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'DailyWrite') {
              iconName = 'pencil';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: route.name === 'DailyWrite' ? { display: 'none' } : {}
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="DailyWrite" component={DailyWrite} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

