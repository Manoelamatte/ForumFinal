import React from 'react';
import ReactDOM from 'react-dom/client';
/* import './index.css'; */
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';  
import Signup from './pages/Signup';
import Feed from './pages/Feed';
import Config from "./pages/Config"
import Coment from "./pages/Coment"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          
          <Route index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/feed" element={<Feed />} />
          <Route path='/config' element={<Config/>}/>
          <Route path='/coment' element={<Coment/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
