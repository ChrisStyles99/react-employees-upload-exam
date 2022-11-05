import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/authSlice';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    if(username !== 'admin1' || password !== 'password1') return;
    console.log('Iniciada sesion');
    dispatch(login());
    navigate('/employees');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuario:</label>
        <input type="text" id="username" value={username} required onChange={e => setUsername(e.target.value)} onCopy={e => {e.preventDefault(); return false}} 
        onPaste={e => {e.preventDefault(); return false}} />
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" value={password} required onChange={e => setPassword(e.target.value)} onCopy={e => {e.preventDefault(); return false}} 
        onPaste={e => {e.preventDefault(); return false}} />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  )
}

export default Login