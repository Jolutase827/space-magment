import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './Login/Login';
import RootInterface from './RootInterface/RootInterface';
import CreateUser from './CreateUser/CreateUser';
function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Navigate to="/rootInterface" />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/rootInterface' element={<RootInterface/>}/>
          <Route path='/createUser' element={<CreateUser/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
