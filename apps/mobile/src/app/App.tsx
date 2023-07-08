import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';

//
//

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text testID='heading'>Hello from ReactNative</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
