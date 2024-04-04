import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={ProductList} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
