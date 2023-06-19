import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NextofKin from './components/form/NextofKin';
// import PersonalLogin from './components/form/PersonalLogin';
// import Hero from './components/hero/Hero';
import Home from './pages/Home';
import Login from './pages/Login';
import NextDetails from './pages/NextDetails';
import PopUp from './components/popup/PopUp';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          {/* <Route path='/' element={<PopUp />}/> */}
          <Route path='/login' element={<Login />}/>
          <Route path='/nextdetails' element={<NextDetails />}/>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
