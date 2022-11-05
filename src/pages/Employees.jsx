import React, { useState } from 'react'
import ModalEmployeeForm from '../components/ModalEmployeeForm';
import Pagination from '../components/Pagination';
import TableEmployees from '../components/TableEmployees';
import { useGetAllEmployeesQuery } from '../store/slices/apiSlice';

const Employees = () => {

  const { data: list, isLoading, isError } = useGetAllEmployeesQuery();

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
    <div className="w-4/5 m-auto">
      {isModalVisible && <ModalEmployeeForm setIsModalVisible={setIsModalVisible} />}
      <div className="flex justify-center items-center mt-4 gap-3">
        <label htmlFor="search" className="text-white text-2xl">Buscar:</label>
        <input type="text" id="search" value={query} onChange={e => setQuery(e.target.value)} className="p-2 text-lg rounded-xl" />
      </div>
      <div className="flex justify-center mt-4">
        {isError && <p className="text-red-400 text-lg">Hubo un error al traer a los empleados</p> }
        {isLoading && <p className="text-white text-lg">Cargando...</p> }
        {!isLoading && <TableEmployees list={list} search={search} />}
      </div>
      <div className="flex justify-center mt-4">
      {query === '' && <Pagination currentPage={currentPage} total={list?.data?.employees?.length || 0} limit={10} onPageChange={(page) => setCurrentPage(page)} />}
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={() => setIsModalVisible(true)} className="bg-green-600 p-3 rounded-2xl text-white">Agregar empleado</button>
      </div>
    </div>
  )
}

export default Employees