import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import LoginProvider from './context/LoginProvider';
import RegisterProvider from './context/RegisterProvider';
import ProductsProvider from './context/ProductsProvider';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Register from './pages/Register';

function App() {
  return (
    <LoginProvider>
      <RegisterProvider>
        <ProductsProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/admin/orders" component={ Orders } />
              <Route path="/login" component={ Login } />
              <Route path="/products" component={ Products } />
              <Route path="/register" component={ Register } />
              <Redirect from="/" to="/login" />
            </Switch>
          </BrowserRouter>
        </ProductsProvider>
      </RegisterProvider>
    </LoginProvider>
  );
}

export default App;
