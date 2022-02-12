import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import PriseDeVue from './components/PriseDeVue';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown'

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import Logiciel from './components/Logiciel';
import Contact from './components/Contact';
import Traitement from './components/Traitement';
import Smartphone from './components/Smartphone';
import './components/main.css'
import Visualisation from './components/Visualisation';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav justify variant="tabs" defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
        <div class="navigation">
          <Nav.Link href="/">Accueil</Nav.Link>
        </div>
        </Nav.Item>
        <Nav.Item as="li">
        <div class="navigation">
          <Nav.Link href="/smartphone">Smartphone</Nav.Link>
        </div>
        </Nav.Item>
        <NavDropdown title="Modélisation" id="basic-nav-dropdown" className="dropdownTitle">
          <div className="dropdownItem">
        <NavDropdown.Item href="/prise-de-vue" >Collecte d'images</NavDropdown.Item>
          <NavDropdown.Item href="/traitement">Traitement</NavDropdown.Item>
          <NavDropdown.Item href="/visualisation">Visualisation des résultats</NavDropdown.Item>
        </div>
        </NavDropdown>
        <Nav.Item>
        <div class="navigation">
          <Nav.Link href="/contact">Contact</Nav.Link>
        </div>
        </Nav.Item>
      </Nav>
      
      <Routes>
        <Route exact path="/" element={<App />}/>
        <Route path="/visualisation" element={<Visualisation />}/>
        <Route path="/logiciel" element={<Logiciel />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/prise-de-vue" element={<PriseDeVue />}/>
        <Route path="/traitement" element={<Traitement />}/>
        <Route path="/smartphone" element={<Smartphone />}/>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);