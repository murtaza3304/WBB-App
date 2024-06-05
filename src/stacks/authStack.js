import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/auth/Onboarding';
import SignUp from '../screens/auth/SignUp';
import Genres from '../screens/auth/Genres';
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
      <Stack.Screen
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        name="Genres"
        component={Genres}
      />
      
    </Stack.Navigator>
  );
}

export default AuthStack;
