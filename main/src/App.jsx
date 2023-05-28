import './App.css';
import {HashRouter, Route, Routes} from 'react-router-dom'
import MainPage from './components/MainPage/MainPage';
import About from './components/About/About';
import Users from './components/Users/Users';
import Burger from './UI/Burger/Burger';
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
