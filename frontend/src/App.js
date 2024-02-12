import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Router} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="mens"/>}/>
        <Route path='/womens' element={<ShopCategory category="womens"/>}/>
        <Route path='/kids' element={<ShopCategory category="kids"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/' element={<Shop/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
