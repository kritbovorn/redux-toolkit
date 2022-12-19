import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/app/store";
import { fetchedPosts } from "./src/redux/features/posts/post_slice";
import { fetchedUsers } from "./src/redux/features/users/user_slice";
import RootScreen from "./src/screens/root_screen";

store.dispatch(fetchedPosts);
store.dispatch(fetchedUsers());

const App = () => {
  return (  
      <Provider store={store}>
        <RootScreen />
      </Provider>
  );
}

export default App;





