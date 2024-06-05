import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/app/home/home';

const Stack = createNativeStackNavigator();
function AppStack() {
  return  (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      
    </Stack.Navigator>
  );
}

export default AppStack;
