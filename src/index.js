import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Feed from './App';
import './App.css';
import Template from './components/template';
import mcd from './Adverts/mcd.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <nav class="navbar navbar-expand-xl  navbar-light bg-danger pl-5 pb-3">
            <ul type="none" class="navbar-nav mr-auto"> 
                <li class="nav-item">
                <a to="/home" class="navbar-brand">
                    <h2 className='branding' id="brand">citrus</h2> 
                </a>      
                </li>
                <li class="nav-item">
                    <input id="srch" type="text" className="search-bar" placeholder='search' maxLength={15}></input>
                </li>
            </ul>
            </nav>
            <a href="https://www.mcdonalds.com/us/en-us.html" target="_blank">
                <img class="adds" id="mcd" src={mcd}></img>
            </a>
        </div>
    );
}

function App(){
    return(
        <Router>
        <Routes>
            <Route default path="/" element={<Feed></Feed>}></Route>
            <Route path="home" element={<Feed></Feed>}></Route>
            <Route path="order" element={<Template></Template>}></Route>
        </Routes>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
     <div>
        <Home></Home>
        <App></App>
     </div>
    );
