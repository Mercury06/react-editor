
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import List from './List/List';
import MainPage from './MainPage/MainPage';

import Navbar from './Navbar/Navbar.jsx';

function App() {
  return (
    <div className="App">
       
        <Navbar />
          <div className="wrap">
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/list" element={<List />} />           
          </Routes> 
              
          </div>
    </div>
  );
}

export default App;
