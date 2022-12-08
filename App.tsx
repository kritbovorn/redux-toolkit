import React, { Fragment } from "react";
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { store } from "./src/redux/app/store";
import MainScreen from "./src/screens/main_screen";

const App = () => {
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: '' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '' }}>
        <StatusBar barStyle="light-content" />
        <Provider store={store}>
          <View style={{ flex: 1, backgroundColor: '' }}>
              <MainScreen />
          </View>
        </Provider>
      </SafeAreaView>
    </Fragment>
  );
}

export default App;



