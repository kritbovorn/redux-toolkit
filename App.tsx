import React, { Fragment } from "react";
import { SafeAreaView, StatusBar, Text, TouchableHighlight, View } from 'react-native';
import { Provider } from "react-redux";
import InputComponent from "./src/component/input/input_component";
import TextBody from "./src/components/text/text_body";
import TextHeadline2 from "./src/components/text/text_headline2";
import TextTitle from "./src/components/text/text_title";
import { store } from "./src/redux/app/store";
import TitleHead from "./src/redux/features/todo/title_head";
import TodoList from "./src/redux/features/todo/todo_list";
import { colors } from "./src/utils/colors";
import sc from "./src/utils/size_config";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: colors.secondaryBackground }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
          <StatusBar barStyle="light-content" />
          <View style={{ flex: 1, backgroundColor: colors.background }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: colors.secondaryBackground }}>
              <TextHeadline2 title="Simple Todo App : Use Redux Toolkit" fontweight="500" textAlign="center" color={colors.secondary} />

            </View>
            <TitleHead />
            <InputComponent />
            <TodoList />
          </View>
        </SafeAreaView>
      </Fragment>
    </Provider>
  );
}

export default App;



