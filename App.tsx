import React, { Fragment } from "react";
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { store } from "./src/redux/app/store";

const App = () => {
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: '' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '' }}>
        <StatusBar barStyle="light-content" />
        <Provider store={store}>
          <View style={{ flex: 1, backgroundColor: '' }}>

          </View>
        </Provider>
      </SafeAreaView>
    </Fragment>
  );
}

export default App;



