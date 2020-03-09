/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Auths from './src/navigation/AppNavigation';

AppRegistry.registerComponent(appName, () => Auths);
