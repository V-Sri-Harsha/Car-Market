import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import CarListPage from './pages/CarListPage';
import CarDetailPage from './pages/CarDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import MyOrdersPage from './pages/MyOrdersPage'; 
import ReceiptPage from './pages/ReceiptPage';


function App() {
  return (
    <Router>
      <nav style={{ padding: '15px', background: '#333', color: 'white', display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em' }}>Home</Link>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em' }}>My Cart</Link>
        <Link to="/orders" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em' }}>My Orders</Link> 
      </nav>

      <div className="App">
        <Routes>
          <Route path="/" element={<CarListPage />} />
          <Route path="/car/:id" element={<CarDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success" element={<OrderSuccessPage />} />
          <Route path="/orders" element={<MyOrdersPage />} />
          <Route path="/order/:id" element={<ReceiptPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;