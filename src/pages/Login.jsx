import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { login } from '../store/slices/authSlice';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username !== 'admin1' || password !== 'password1') {
      toast.error('Usuario y/o contraseña incorrecto', {
        position: 'top-center',
        theme: 'colored'
      })
      return;
    }
    dispatch(login());
    navigate('/employees');
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col bg-sky-600 p-6 rounded-xl text-white w-96">
        <label htmlFor="username" className="text-xl mb-4">Usuario:</label>
        <input type="text" id="username" value={username} required onChange={e => setUsername(e.target.value)} onCopy={e => {e.preventDefault(); return false}} 
        onPaste={e => {e.preventDefault(); return false}} className="text-black p-3" />
        <label htmlFor="password" className="text-xl my-4">Contraseña:</label>
        <input type="password" id="password" value={password} required onChange={e => setPassword(e.target.value)} onCopy={e => {e.preventDefault(); return false}} 
        onPaste={e => {e.preventDefault(); return false}} className="text-black p-3" />
        <button type="submit" className="bg-slate-600 mt-4 text-xl p-3">Iniciar sesión</button>
      </form>
    </div>
  )
}

export default Login