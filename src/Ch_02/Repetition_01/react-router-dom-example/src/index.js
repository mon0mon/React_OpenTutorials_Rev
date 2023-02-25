import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {HashRouter, NavLink, Route, Routes, useParams} from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const contents = [
  {id:1, title:'HTML', description:'HTML is ...'},
  {id:2, title:'JS', description:'JS is ...'},
  {id:3, title:'React', description:'React is ...'},
];

function Home() {
  return (
    <>
      <h1>Home</h1>
      Home...
    </>
  )
}

function Topic() {
  const params = useParams();
  const topic_id = Number(params.topic_id);
  let selected_topic = {
    title: 'Sorry',
    description: 'Not Found'
  };
  contents.map(content => {
    if (content.id === topic_id) {
      selected_topic.title = content.title;
      selected_topic.description = content.description;
      return null;
    }
    return null;
  });
  return (
    <>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </>
  )
}

function Topics() {
  var lis = [];
  for (let i = 0; i < contents.length; i++) {
    lis.push(
      <li key={contents[i].id}>
        <NavLink to={'/topics/' + contents[i].id}>
          {contents[i].title}
        </NavLink>
      </li>
    );
  }
  return (
    <>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Routes>
        <Route path="/:topic_id" element={<Topic/>}/>
      </Routes>
    </>
  )
}

function Contact() {
  return (
    <>
      <h1>Contact</h1>
      Contact...
    </>
  )
}

function App() {
  return (
    <>
      <h1>Hello React Router Dom</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/topics/*" element={<Topics/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/*" element={'Not Found'}/>
      </Routes>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App/>
    </HashRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
