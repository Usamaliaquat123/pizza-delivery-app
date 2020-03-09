
import { createStackNavigator } from "react-navigation-stack";

export const Auth = createStackNavigator(
  {
    Splash: {screen: Splash},
    Login: {screen: Login},
    Register: {screen: Register},
    Offline: {screen: Offline},
  },
  {
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
  },
);