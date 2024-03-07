import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store_d from './redux_elements/store.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Here, I used Redux. We use Redux for the state management of the project.
  // In Redux, we have to create a store where we keep all of our states. for that i am using here provide inside the provider i am giving the acces of the store
  // So that all component can access it.
  <React.StrictMode>
    <Provider store={store_d}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
