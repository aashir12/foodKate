import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/home';
import Sign from './components/sign/sign';
import Login from './components/sign/login';
import Header from './components/header';
import { CartProvider } from './components/contextReducer';
import Cart from './screens/cart';
import Order from './components/order';


function App() {
  return (
<CartProvider>
<Router>
          <Header/>
      <Routes>
      <Route path="/" Component={Home} />
        <Route path="/sign" Component={Sign} />
        <Route path="/login" Component={Login} />
        <Route path="/cart" Component={Cart} />
        <Route path="/orders" Component={Order} />
      </Routes>
    </Router>
</CartProvider>
    
  );
}

export default App;
