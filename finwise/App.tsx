import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {YearData, YearlyChart} from './src/components/YearlyChart';
import BottomNavigation from './src/navigation/bottomNavigation/BottomNavigation';
import StackNavigation from './src/navigation/stackNavigation/StackNavigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
