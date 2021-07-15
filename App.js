import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/helper/Navigation';
import thunk from 'redux-thunk';
import reducers from './src/reducers';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(reducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer><Navigation></Navigation></NavigationContainer>
    </Provider>
  );
};


export default App;