import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginProvider from './context/LoginProvider';
import RegisterProvider from './context/RegisterProvider';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Register from './pages/Register';

function App() {
  return (
    <LoginProvider>
      <RegisterProvider>
        <Switch>
          <Route path="/admin/orders" component={ Orders } />
          <Route path="orders" component={ Orders } />
          <Route path="/login" component={ Login } />
          <Route path="/products" component={ Products } />
          <Route path="/register" component={ Register } />
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </RegisterProvider>
    </LoginProvider>
  );
}

export default App;
