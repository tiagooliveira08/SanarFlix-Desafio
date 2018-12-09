import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './views';
import { Provider } from "react-redux";
import store from "./redux/store";
console.log(store.getState());
ReactDOM.render(<Provider store={store}><Home /></Provider>, document.getElementById('root'));