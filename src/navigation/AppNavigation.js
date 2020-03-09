
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Splash from './../containers/Splash/Splash';
import Login from './../containers/Auth/Login/Login';
import Register from './../containers/Auth/Register/Register';
import Offline from './../containers/Offline/Offline';

 const Auth = createStackNavigator(
  {
    Splash: {screen: Splash},
    Login: {screen: Login},
    Register: {screen: Register},
    Offline: {screen: Offline},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  },
);

const Auths = createAppContainer(Auth)
export default Auths