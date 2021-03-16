import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserProvider from './context/UserProvider';
import ProductsProvider from './context/ProductsProvider';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';

function App() {
  return (
    <UserProvider>
      <ProductsProvider>
        <Switch>
          <Route exact path="/admin/orders" component={ Orders } />
          <Route exact path="/orders" component={ Orders } />
          <Route path="/login" component={ Login } />
          <Route path="/products" component={ Products } />
          <Route path="/register" component={ Register } />
          <Route path="/profile" component={ Profile } />
          <Route path="/checkout" component={ Checkout } />
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </ProductsProvider>
    </UserProvider>
  );
}

export default App;
