import React from 'react'

const TableEmployees = ({ list, search }) => {
  return (
    <table className="text-white">
      <thead className="bg-sky-800">
        <tr>
          <th className="p-2">Nombre</th>
          <th className="p-2">Apellido</th>
          <th className="p-2">Cumpleaños</th>
        </tr>
      </thead>
      <tbody>
        {search(list).length < 1 && (
          <tr>
            <td colSpan={3}>No hay empleados</td>
          </tr>
        )}
        {search(list).map(item => (
          <tr key={item.id} className="border-b border-white">
            <td className="p-2">{item.name}</td>
            <td className="p-2">{item.last_name}</td>
            <td className="p-2">{new Date(item.birthday).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableEmployees