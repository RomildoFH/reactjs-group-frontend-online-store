import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import carrinhoDeCompras from './pages/carrinhoDeCompras';
import productList from './pages/productList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/carrinho" component={ carrinhoDeCompras } />
        <Route path="/" component={ productList } exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// mudança aleatória
