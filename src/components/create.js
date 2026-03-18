import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';

const Create = () => {
  const [modelo, setModelo] = useState('');
  const [coleccion, setColeccion] = useState('');
  const [proveedor, setProveedor] = useState('');
  const [desperdicio, setDesperdicio] = useState('');
  const [costo, setCosto] = useState('');
  const navigate = useNavigate();

  const productsCollection = collection(db, 'products');

  const store = async (e) => {
    e.preventDefault();
    await addDoc(productsCollection, {
      modelo,
      coleccion,
      proveedor,
      desperdicio,
      costo,
    });
    navigate('/');
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='text-center mt-4'>Crear Producto</h1>
          <form onSubmit={store}>
            <label className='form-label'>Modelo</label>
            <input
              type='text'
              className='form-control'
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
            />
            <label className='form-label'>Colección</label>
            <input
              type='text'
              className='form-control'
              value={coleccion}
              onChange={(e) => setColeccion(e.target.value)}
            />
            <label className='form-label'>Proveedor</label>
            <input
              type='text'
              className='form-control'
              value={proveedor}
              onChange={(e) => setProveedor(e.target.value)}
            />
            <label className='form-label'>Desperdicio</label>
            <input
              type='number'
              className='form-control'
              value={desperdicio}
              onChange={(e) => setDesperdicio(e.target.value)}
            />
            <label className='form-label'>Costo</label>
            <input
              type='number'
              className='form-control'
              value={costo}
              onChange={(e) => setCosto(e.target.value)}
            />
            <button type='submit' className='btn btn-primary mt-4'>
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
