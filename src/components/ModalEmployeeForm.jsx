import React, { useState } from 'react'
import { useSaveEmployeeMutation } from '../store/slices/apiSlice';
import Modal from './Modal'

const ModalEmployeeForm = ({ setIsModalVisible }) => {

  const [saveEmployee] = useSaveEmployeeMutation();

  const [formData, setFormData] = useState({
    name: '', last_name: '', birthday: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await saveEmployee({
        name: formData.name,
        last_name: formData.last_name,
        birthday: formData.birthday.replace(/-/gi, '/')
      });
      setIsModalVisible(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Modal setIsModalVisible={setIsModalVisible}>
      <form onSubmit={handleSubmit} className="flex flex-col rounded-xl text-white w-96">
        <label htmlFor="name" className="text-xl mb-4">Nombre</label>
        <input type="text" required minLength="3" maxLength="30" id="name" onChange={handleChange} className="text-black p-2" />
        <label htmlFor="last_name" className="text-xl my-4">Apellidos</label>
        <input type="text" required minLength="3" maxLength="30" id="last_name" onChange={handleChange} className="text-black p-2" />
        <label htmlFor="birthday" className="text-xl my-4">Cumpleaños</label>
        <input type="date" required id="birthday" onChange={handleChange} className="text-black p-2" />
        {!isLoading && <button type="submit" className="bg-slate-600 mt-4 text-xl p-3 rounded-2xl">Guardar</button>}
        {isLoading && <span className="loader"></span>}
      </form>
    </Modal>
  )
}

export default ModalEmployeeForm