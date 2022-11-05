import React, { useEffect, useState } from 'react'
import ModalEmployeeForm from '../components/ModalEmployeeForm';
import Pagination from '../components/Pagination';
import { BASE_URL } from '../config';

const Employees = () => {

  const [employeesList, setEmployeesList] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const search = (data) => {
    if(query === '') {
      return data.slice((currentPage * 10) - 10, currentPage * 10);
    }
    return data.filter(item => (
      ['name', 'last_name'].some(key => item[key].toLowerCase().includes(query))
    ));
  }

  useEffect(() => {
    const fetchData = async() => {
      const result = await fetch(BASE_URL, {
        method: 'GET'
      });
      const data = await result.json();
      setEmployeesList(data.data.employees);
    }
    fetchData();
  }, []);

  return (
    <div>
      {isModalVisible && <ModalEmployeeForm />}
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cumpleaños</th>
          </tr>
        </thead>
        <tbody>
          {search(employeesList).length < 1 && (
            <tr>
              <td colSpan={3}>No hay empleados</td>
            </tr>
          )}
          {search(employeesList).map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.last_name}</td>
              <td>{new Date(item.birthday).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {query === '' && <Pagination currentPage={currentPage} total={employeesList.length} limit={10} onPageChange={(page) => setCurrentPage(page)} />}
      <button onClick={() => setIsModalVisible(true)}>Agregar empleado</button>
    </div>
  )
}

export default Employees