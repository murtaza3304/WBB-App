import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
const Stack = createNativeStackNavigator();
function AppStack() {
  return  (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
      />
     
      
    </Stack.Navigator>
  );
}

export default AppStack;
