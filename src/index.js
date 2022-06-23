import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {SigninWithGoogle} from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Signup } from './Signup';
import {Todo} from './Todo'
import { UpdateProfile } from './UpdateProfile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<SigninWithGoogle/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/todo" element={<Todo/>}/>
        <Route exact path="/todo/profileupdate" element={<UpdateProfile/>}/>
      </Routes>
   </BrowserRouter>

);

reportWebVitals();
