import React, { Fragment } from "react";
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Provider } from "react-redux";
import TextHeadline2 from "./src/components/text/text_headline2";
import { store } from "./src/redux/app/store";
import { colors } from "./src/utils/colors";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: colors.secondaryBackground }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
          <StatusBar barStyle="light-content" />
          <View style={{ flex: 1, backgroundColor: colors.background }}>
            <View style={{ alignItems: 'center', justifyContent: 'center',padding: 20, backgroundColor: colors.secondaryBackground }}>
              <TextHeadline2 title="Simple Todo App : Use Redux Toolkit" textAlign="center" />

            </View>
          </View>
        </SafeAreaView>
      </Fragment>
    </Provider>
  );
}

export default App;



