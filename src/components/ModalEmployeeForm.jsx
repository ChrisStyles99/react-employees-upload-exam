import React, { useState } from 'react'
import { useSaveEmployeeMutation } from '../store/slices/apiSlice';
import Modal from './Modal'

const ModalEmployeeForm = () => {

  const [saveEmployee] = useSaveEmployeeMutation();

  const [formData, setFormData] = useState({
    name: '', last_name: '', birthday: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    await saveEmployee({
          name: formData.name,
          last_name: formData.last_name,
          birthday: formData.birthday.replace(/-/gi, '/')
        })
  }

  return (
    <Modal>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input type="text" required minLength="3" maxLength="30" id="name" onChange={handleChange} />
        <label htmlFor="last_name">Apellidos</label>
        <input type="text" required minLength="3" maxLength="30" id="last_name" onChange={handleChange} />
        <label htmlFor="birthday">Cumpleaños</label>
        <input type="date" required id="birthday" onChange={handleChange} />
        <button type="submit">Guardar</button>
      </form>
    </Modal>
  )
}

export default ModalEmployeeForm