import React, { useState } from 'react'
import ModalEmployeeForm from '../components/ModalEmployeeForm';
import Pagination from '../components/Pagination';
import { useGetAllEmployeesQuery } from '../store/slices/apiSlice';

const Employees = () => {

  const { data: list } = useGetAllEmployeesQuery();

  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const search = (data) => {
    if(data === undefined) return [];
    if(query === '') {
      return data.data.employees.slice((currentPage * 10) - 10, currentPage * 10);
    }
    return data.data.employees.filter(item => (
      ['name', 'last_name'].some(key => item[key].toLowerCase().includes(query))
    ));
  }

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
          {search(list).length < 1 && (
            <tr>
              <td colSpan={3}>No hay empleados</td>
            </tr>
          )}
          {search(list).map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.last_name}</td>
              <td>{new Date(item.birthday).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {query === '' && <Pagination currentPage={currentPage} total={list?.data?.employees?.length || 0} limit={10} onPageChange={(page) => setCurrentPage(page)} />}
      <button onClick={() => setIsModalVisible(true)}>Agregar empleado</button>
    </div>
  )
}

export default Employees