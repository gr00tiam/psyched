import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk"
import RootReducer from "./store/reducers/RootReducer";
import { Provider } from "react-redux"
// import { composeWithDevTools } from '@redux-devtools/extension';
// import { applyMiddleware } from 'redux'



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const middlewares = [thunk];
// const middlewareEnhancer = applyMiddleware(...middlewares);
// const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
// const storeEnhancers = [middlewareEnhancer];

// const composedEnhancer = compose(...storeEnhancers);

const store = configureStore({
  reducer: RootReducer,
  middleware: middlewares,
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
