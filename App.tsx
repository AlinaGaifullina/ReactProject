import React from 'react';

import { SafeAreaView } from 'react-native';

import {HomeScreen} from './src/screens/HomeScreen.tsx';
import {ThemeProvider} from './src/modules/theme/ThemeProvider.tsx';


const App = () => {
  return (
    <ThemeProvider >
      <SafeAreaView style={{ flex: 1 }}>
        <HomeScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
