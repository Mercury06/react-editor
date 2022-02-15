
import { NavLink } from 'react-router-dom';
import './App.scss';
import MainPage from './MainPage/MainPage';

import Navbar from './Navbar/Navbar.jsx';
import { LogoIcon } from './UI/Icons/Boxicons';
function App() {
  return (
    <div className="App">
       
        <Navbar />
          <div className="wrap">
              <MainPage />
          </div>
    </div>
  );
}

export default App;
