import React from 'react';

import { SafeAreaView } from 'react-native';

import {HomeScreen} from './src/screens/HomeScreen.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';


const App = () => {
  return (
    <GestureHandlerRootView >
      <SafeAreaView style={{ flex: 1 }}>
        <HomeScreen />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
