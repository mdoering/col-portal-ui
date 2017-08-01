import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import NavLink from './components/NavLink';

import Home from './routes/home/Home';
import All from './routes/search/All';
import About from './routes/info/About';
import Species from './routes/species/Species';
import NotFound from './routes/NotFound';

import iconInfo from './css/Icon_Info.gif';
import iconBrowse from './css/Icon_Browse.gif';
import iconSearch from './css/Icon_Search.gif';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends Component {
  render() {
    return (
  <BrowserRouter basename="/">
    <div>

      <div id="header">
        <span className="title">Catalogue of Life: 2017 Annual Checklist</span>
      </div>
      <div id="languagebar">
        <ul>
          <li><a id="selected" href="#" title="">English</a></li>
          <li><a href="#fr" title="Français">French</a></li>
          <li>
            <a href="#es" title="Español">Spanish</a>
          </li>
          <li>
            <a href="#zh" title="中文">Chinese</a>
          </li>
          <li>
            <a href="#ru" title="русский">Russian</a>
          </li>
          <li>
            <a href="#pt" title="Português">Portuguese</a>
          </li>
          <li>
            <a href="#nl" title="Nederlands">Dutch</a>
          </li>
          <li>
            <a href="#de" title="Deutsch">German</a>
          </li>
          <li>
            <a href="#pl" title="Polski">Polish</a>
          </li>
          <li>
            <a href="#lt" title="Lietuvių">Lithuanian</a>
          </li>
          <li>
            <a href="#th" title="ไทย">Thai</a>
          </li>
          <li>
            <a href="#vi" title="Tiếng Việt">Vietnamese</a>
          </li>
        </ul>
        <div className="clear"></div>
      </div>
      <div id="menu" className="view">
        <span id="log"></span>
        <ul id="nav">
          <li className="">
            <Link to="/browse/tree">
              <img src={iconBrowse} alt="Browse"/>
              <span>Browse</span>
            </Link>
            <ul>
              <NavLink to="/browse/tree">Taxonomic tree</NavLink>
              <NavLink to="/browse/classification">Taxonomic classification</NavLink>
            </ul>
          </li>
          <li className="">
            <Link to="/search/all">
              <img src={iconSearch} alt="Search"/>
              <span>Search</span>
            </Link>
            <ul>
              <NavLink to="/search/all">Search all names</NavLink>
              <NavLink to="/search/scientific">Search for scientific names</NavLink>
              <NavLink to="/search/common">Search for common names</NavLink>
              <NavLink to="/search/distribution">Search by distribution</NavLink>
            </ul>
          </li>
          <li className="">
            <Link to="/info/about">
              <img src={iconInfo} alt="Info"/>
              <span>Info</span>
            </Link>
            <ul>
              <NavLink to="/info/about">About the Catalogue of Life</NavLink>
              <NavLink to="/info/special">What's new?</NavLink>
              <NavLink to="/info/ac">2017 Annual Checklist</NavLink>
              <NavLink to="/info/databases">Source databases</NavLink>
              <NavLink to="/info/totals">Species totals</NavLink>
              <NavLink to="/info/hierarchy">Classification, estimates &amp; extinct taxa</NavLink>
              <NavLink to="/info/copyright">Copyright, reproduction &amp; sale</NavLink>
              <NavLink to="/info/cite">How to cite this work</NavLink>
              <NavLink to="/info/websites">Web sites</NavLink>
              <NavLink to="/info/contact">Contact us</NavLink>
              <NavLink to="/info/acknowledgements">Acknowledgments</NavLink>
            </ul>
          </li>
        </ul>
      </div>
      <div id="right-col">
        <Switch>
          <Route exact path="/" component={All}/>
          <Route path="/search/all" component={All}/>
          <Route path="/details/species/id/:key" component={Species}/>
          <Route path="/info/about" component={About}/>
          <Route component={NotFound}/>
        </Switch>
        <div id="footer">
          <span className="app-name">Annual Checklist Interface</span>
          <span className="app-version">v1.9 rev c957d6a</span> developed by <a href="http://www.naturalis.nl/">Naturalis Biodiversity Center</a>.
          Please note, this site uses <a href="http://www.catalogueoflife.org/content/privacy-policy"><u>cookies</u></a>.
          If you continue to use the site we will assume that you agree with this.
        </div>
      </div>

    </div>
  </BrowserRouter>
   );
  }
}

export default App;
