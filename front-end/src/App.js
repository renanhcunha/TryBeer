import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserProvider from './context/UserProvider';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  return (
    <UserProvider>
      <Switch>
        <Route exact path="/admin/orders" component={ Orders } />
        <Route exact path="/orders" component={ Orders } />
        <Route path="/login" component={ Login } />
        <Route path="/products" component={ Products } />
        <Route path="/register" component={ Register } />
        <Route path="/profile" component={ Profile } />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </UserProvider>
  );
}

export default App;
