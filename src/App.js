import { Routes,Route } from 'react-router-dom';
import './App.css';
import './App.scss'
import { CheckoutPage } from './containers/CheckoutPage/CheckoutPage';
import HomePage from './containers/HomePage/HomePage'
import ProductListPage from './containers/ProductListPage/ProductListPage'
import ContactPage from './containers/ContactPage/ContactPage'
import Applayout from './layout/Applayout';
import ProductsPage from './containers/ProductsPage/ProductsPage';
import {FavoriteProductsPage} from './containers/FavoriteProductsPage/FavoriteProductsPage';
import PaymentPage from './containers/PaymentPage/PaymentPage';
import OrderMessage from './containers/OrderMessage/OrderMessage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Applayout />}>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/favourites" element={<FavoriteProductsPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/success" element={<OrderMessage />} />
        <Route path="*" element={<div className='page-not-found'><img className='img-error' src={require('../src/assets/images/404-error.png')} /></div>} />
      </Route>
    </Routes>
  );
}

export default App;
