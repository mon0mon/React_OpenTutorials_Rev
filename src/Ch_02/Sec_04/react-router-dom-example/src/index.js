import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter, NavLink, Route, Routes} from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

function Home() {
  return (
    <div>
      <h1>Home</h1>
      Home...
    </div>
  )
}

function Topics() {
  return (
    <div>
      <h1>Topics</h1>
      Topics...
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      Contact...
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Hello React Router Dom</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/topics" element={<Topics/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/*" element={'Not Found'}/>
      </Routes>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App/>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
