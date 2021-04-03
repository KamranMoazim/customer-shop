import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

// import buildSitemap from 'react-build-sitemap'

import React from 'react'

import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/pages/Home.jsx';
import Categories from './components/pages/Categories.jsx';
import OrderStatus from './components/pages/OrderStatus.jsx';
import Appointment from './components/pages/Appointment.jsx';
import Blogs from './components/pages/Blogs.jsx';
import EachCategory from './components/EachCategory.js';
import ProductDetails from './components/ProductDetails.js';



function App() {

  
  // buildSitemap('./components/pages/Home.jsx', './../public/', 'https://iqrasteelworks.com')
  // buildSitemap('./components/pages/Categories.jsx', './../public/', 'https://iqrasteelworks.com')
  // buildSitemap('./components/pages/OrderStatus.jsx', './../public/', 'https://iqrasteelworks.com')
  // buildSitemap('./components/pages/Blogs.jsx', './../public/', 'https://iqrasteelworks.com')
  // buildSitemap('./components/pages/Appointment.jsx', './../public/', 'https://iqrasteelworks.com')


  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/categories' exact component={Categories} />
          {/* <Route path='/TestComponent' exact component={TestComponent} /> */}
          <Route path='/categories/:category' exact component={EachCategory} />
          <Route path='/categories/:category/:details/:itemCode' component={ProductDetails} />
          
          <Route path='/orderStatus' component={OrderStatus} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/appointment' exact component={Appointment} />
          <Route path='/appointment/:itemCode' component={Appointment} />
        </Switch>
        {/* <Routes /> */}
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
