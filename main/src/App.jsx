import './App.css';
import {HashRouter, Route, Routes} from 'react-router-dom'
import MainPage from './components/mainPage/MainPage';
import Burger from './components/mainPage/Burger';
import About from './components/about/About';
import Users from './components/users/Users';
function App() {


      return (
        <HashRouter basename='/'>
          <div className="App">
            <Routes>
              <Route path='/posts' element={<MainPage/>} />
              <Route path='/about' element={<About />} />
              <Route path='/users/:id' element={<Users />} />
              <Route path='/' element={<Burger/>} />
            </Routes>
          </div>
        </HashRouter>
      );
    }

export default App;
