/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import  from './src/navigation/AppNavigation';
import Main  from './src/main';
AppRegistry.registerComponent(appName, () => Main);
