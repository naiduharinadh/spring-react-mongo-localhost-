import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DataFetcher from "./datafetch.js";
import Compo from './components/component1';
import reportWebVitals from './reportWebVitals';
import HariNadh1 from './practiceComp/Events.js';
import Parent from './ParentChildFunUsage/Parent.js';
import Child from './ParentChildFunUsage/Child.js';
import HariNadh2 from './autofits/ScreenSet.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <App /> */}
   { /* <HariNadh1 /> */}
   <HariNadh2 />
   {/*<Parent />
   index.js child class: <Child /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
