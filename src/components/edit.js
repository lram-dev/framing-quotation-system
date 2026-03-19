import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';

const Edit = () => {
  const [modelo, setModelo] = useState('');
  const [coleccion, setColeccion] = useState('');
  const [proveedor, setProveedor] = useState('');
  const [desperdicio, setDesperdicio] = useState('');
  const [costo, setCosto] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const product = doc(db, 'products', id);
    const data = {
      modelo: modelo,
      coleccion: coleccion,
      proveedor: proveedor,
      desperdicio: desperdicio,
      costo: costo,
    };
    await updateDoc(product, data);
    navigate('/');
  };

  const getProductById = async (id) => {
    const product = await getDoc(doc(db, 'products', id));
    if (product.exists()) {
      //console.log(product.data());
      setModelo(product.data().modelo);
      setColeccion(product.data().coleccion);
      setProveedor(product.data().proveedor);
      setDesperdicio(product.data().desperdicio);
      setCosto(product.data().costo);
    } else {
      console.log('El producto no existe');
    }
  };

  useEffect(() => {
    getProductById(id);
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container user-select-none'>
      <div className='row'>
        <div className='col'>
          <h1 className='text-center mt-4 pe-none'>Editar Producto</h1>
          <form onSubmit={update}>
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
              step={0.1}
              onChange={(e) => setDesperdicio(e.target.value)}
            />
            <label className='form-label'>Costo</label>
            <input
              type='number'
              className='form-control'
              value={costo}
              step={0.1}
              onChange={(e) => setCosto(e.target.value)}
            />
            <button type='submit' className='btn btn-primary mt-4'>
              Actualizar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
