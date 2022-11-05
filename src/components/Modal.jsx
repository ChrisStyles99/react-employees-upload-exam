import React from 'react'

const Modal = ({children, setIsModalVisible}) => {
  return (
    <div className="h-screen w-screen bg-black bg-opacity-50 absolute top-0 left-0 flex justify-center items-center">
      <div className="bg-sky-600 p-6 text-white rounded-3xl relative">
        <button className="absolute right-3 top-3 text-white text-lg" onClick={() => setIsModalVisible(false)}>X</button>
        {children}
      </div>
    </div>
  )
}

export default Modal