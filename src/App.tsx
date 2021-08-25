import React from 'react';
import store from './store/store';
import { Provider } from 'react-redux'
import Main from './components/main/Main';


const App = (): JSX.Element => {
  return (
    <Provider store={ store }>
      <Main/>
    </Provider>
  );
}

export default App;
