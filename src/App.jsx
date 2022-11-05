import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css'
import Employees from './pages/Employees';
import Login from './pages/Login';
import Upload from './pages/Upload';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';

import 'react-toastify/dist/ReactToastify.css';

function RequireAuth ({ children, redirectTo }) {
  const isAuthenticated = useSelector(state => state.auth.isLoggedIn);
  return isAuthenticated ? children : <Navigate to={redirectTo} />
}

function App() {
  const isAuthenticated = useSelector(state => state.auth.isLoggedIn);
  return (
    <div className="App bg-zinc-700 min-h-screen">
      <ToastContainer />
      <HashRouter>
        <Navbar />
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={
            <RequireAuth redirectTo="/login">
              <Employees />
            </RequireAuth>
          } path="/employees" />
          <Route element={
            <RequireAuth redirectTo="/login">
              <Upload />
            </RequireAuth>
          } path="/upload" />
          <Route path='*' element={<Navigate to={isAuthenticated ? '/employees' : '/login'} />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
