import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/auth/Onboarding';
import SignUp from '../screens/auth/SignUp';
import Genres from '../screens/auth/Genres';
import Login from '../screens/auth/Login';
import BottomTab from './BottomTab';
const Stack = createNativeStackNavigator();
function AuthStack() {
  return  (
    <Stack.Navigator
      initialRouteName={'Onboarding'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        name="Genres"
        component={Genres}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
      />
      
    </Stack.Navigator>
  );
}

export default AuthStack;
