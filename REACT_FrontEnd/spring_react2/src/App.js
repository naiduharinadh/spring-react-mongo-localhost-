import logo from './logo.svg';
import React,{Component} from 'react';
import DataFetcher from "./datafetch.js";
import Compo from './components/component1.js';
import {Statecomponent,Harinadh} from './components/stateComponent.js';
import Like from './components/LikeButton.js';
import { MyClassComponent, MyFunctionalComponent } from './components/MyComponents.js';
import HariNadh2 from './autofits/ScreenSet.js';

import SubmmitData from './components/dataInsert.js';

import './App.css';

function App() {
  return (
    <div className="App">
        <DataFetcher />
        <Statecomponent>
          <h1>this is h1 inside the Statecomponent tag</h1>

          </Statecomponent> 
        <Harinadh>
          <h2>this is harinadh......... inside the harinadh tag </h2>
        </Harinadh>
       

       <Like></Like>

       <SubmmitData />
        
    </div>
  );
}

export default App;
