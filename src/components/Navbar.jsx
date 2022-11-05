import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Navbar = () => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <nav className="flex justify-around items-center bg-sky-800 p-6 text-white">
      <h1 className="text-xl">Employees</h1>
      <ul className="flex gap-3">
        {!isLoggedIn && <li>
          <Link to={"/login"}>Iniciar sesión</Link>
        </li>}
        {isLoggedIn && <>
          <li>
            <Link to={"/employees"}>Empleados</Link>
          </li>
          <li>
            <Link to={"/upload"}>Upload</Link>
          </li>
        </>}
      </ul>
    </nav>
  )
}

export default Navbar