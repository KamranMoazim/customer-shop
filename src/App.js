import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/pages/Home.js';
import Categories from './components/pages/Categories.js';
import OrderStatus from './components/pages/OrderStatus.js';
import Appointment from './components/pages/Appointment.js';
import Blogs from './components/pages/Blogs.js';
import EachCategory from './components/EachCategory.js';
import ProductDetails from './components/ProductDetails.js';
import TestComponent from './components/TestComponent/TestComponent.js';


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/categories' exact component={Categories} />
          <Route path='/TestComponent' exact component={TestComponent} />
          <Route path='/categories/:category' exact component={EachCategory} />
          <Route path='/categories/:category/:details/:itemCode' component={ProductDetails} />
          <Route path='/orderStatus' component={OrderStatus} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/appointment' exact component={Appointment} />
          <Route path='/appointment/:itemCode' component={Appointment} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
