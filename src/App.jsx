import './App.css';
import HeaderComponent from './components/Header/Header';
import FooterComponent from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './components/Home/Home';
import AboutPage from './components/About/Nosotros';
import ContactPage from './components/Contact/Contacto';
import ProductsPage from './components/Products/Productos';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ProductsCategory from './components/Category/Categoria';
import Carrito from './components/Cart/Carrito'; 


function App() {
    return (
        <>
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path='/products' element={<ProductsPage />} />
                    <Route path='/category/:categoryId' element={<ProductsCategory />} />
                    <Route path='/products/:productId' element={<ItemDetail />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path='/carrito' element={<Carrito />} />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </>
    );
}

export default App;
