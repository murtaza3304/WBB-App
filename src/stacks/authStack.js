import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/auth/Onboarding';
const Stack = createNativeStackNavigator();
function AuthStack() {
  return  (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
      />
      
    </Stack.Navigator>
  );
}

export default AuthStack;
