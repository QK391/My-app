import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Login from './pages/Login';
import WishList from './pages/WishList';
import Signup from './pages/Signup';
import Forgotpassword from './pages/ForgotPassword';
import Resetpassword from './pages/ResetPassword';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element = {<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element = {<About/>}/>
            <Route path='contact' element = {<Contact/>}/>
            <Route path='store' element = {<OurStore/>}/>
            <Route path='blogs' element = {<Blog/>}/>
            <Route path='compare-product' element = {<CompareProduct/>}/>
            <Route path='login' element = {<Login/>}/>
            <Route path='wishlist' element = {<WishList/>}/>
            <Route path='signup' element = {<Signup/>}/>
            <Route path='forgot-password' element = {<Forgotpassword/>}/>
            <Route path='reset-password' element = {<Resetpassword/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
