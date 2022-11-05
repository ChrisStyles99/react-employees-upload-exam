import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone';
import ImageSlider from '../components/ImageSlider';

const Upload = () => {

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': [],
      'image/jpeg': [],
      'image/jpg': []
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        }))
      );
      console.log(acceptedFiles);
    }
  });

  return (
    <div>
      <div className="border border-dotted border-white w-1/2 m-auto p-6 flex justify-center items-center my-4" {...getRootProps()}>
        <input {...getInputProps()} />
        <p className="text-lg text-white">
          Arrastra los archivos aqui
        </p>
      </div>
      <div className="flex justify-center gap-3 m-auto">
        <ImageSlider slides={files} />
      </div>
    </div>
  )
}

export default Upload