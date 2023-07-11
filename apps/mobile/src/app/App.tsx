import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { Loader } from '@ui-kit/components/loader/Loader.native';
import { Button } from '@ui-kit/components/button/Button.native';


//
//

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text testID='heading'>Hello from ReactNative</Text>
        <Loader />
        <Button>Click me!</Button>
      </SafeAreaView>
    </>
  );
};

export default App;
