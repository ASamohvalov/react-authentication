import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import UserPage from './pages/UserPage';
import Logout from './pages/Logout';
import UsersPage from './pages/main/UsersPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/logout' element={<Logout />} />
      
        <Route path='/users' element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
