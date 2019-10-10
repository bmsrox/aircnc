import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './src/routes';

//ignorar erros do websocket
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

export default function App() {
  return <Routes />
}
