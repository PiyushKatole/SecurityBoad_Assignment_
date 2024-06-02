import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
// import Movies from './Components/Movie/Movies';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import SecMovies from './Components/Movie/SecMovies';
import FoodOrder from './Components/Food/FoodOrder';

function App() {
  return (

    <div className='Container'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <Banner />
              <SecMovies />
            </>
          } />
          <Route path='/order' element={<FoodOrder />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App





