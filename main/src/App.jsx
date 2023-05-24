import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainPage from './components/mainPage/MainPage';
import Burger from './components/mainPage/Burger';
import About from './components/about/About';
import Users from './components/users/Users';
function App() {


      return (
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path='treakyyy.github.io/test_for_mitrasoft/' element={<Burger/>} />
              <Route path='treakyyy.github.io/test_for_mitrasoft/posts' element={<MainPage/>} />
              <Route path='treakyyy.github.io/test_for_mitrasoft/about' element={<About />} />
              <Route path='treakyyy.github.io/test_for_mitrasoft/users/:id' element={<Users />} />
            </Routes>
          </div>
        </BrowserRouter>
      );
    }

export default App;
