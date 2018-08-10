/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import RootRouter from './App/RootRouter';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => RootRouter);
