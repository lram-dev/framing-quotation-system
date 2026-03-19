import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

import { db } from '../firebaseConfig/firebase';

import Swal from 'sweetalert2';

import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Show = () => {
  //1- configurar los hooks
  const [products, setProducts] = useState([]);

  //2- configurar la referencia DB Firestore
  const productsCollection = collection(db, 'products');

  //3- Función para mostrar los datos
  const getProducts = async () => {
    const data = await getDocs(productsCollection);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  //4- Función para eliminar los datos
  const deleteProduct = async (id) => {
    const productDoc = doc(db, 'products', id);
    await deleteDoc(productDoc);
    getProducts();
  };

  //5- Funcion de confirmación para sweet alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        MySwal.fire('Eliminado!', 'El producto ha sido eliminado.', 'success');
      }
    });
  };

  //6- usamos useEffect para mostrar los datos al cargar el componente
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  //7- devolvemos la vista de nuestro componente
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='d-grid gap-2'>
              <Link to='/create' className='btn btn-secondary mt-2 mb-2'>
                Crear
              </Link>
            </div>
            <table className='table table-dark table-hover'>
              <thead>
                <tr>
                  <th>Modelo</th>
                  <th>Colección</th>
                  <th>Proveedor</th>
                  <th>Desperdicio</th>
                  <th>Costo</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.modelo}</td>
                    <td>{product.coleccion}</td>
                    <td>{product.proveedor}</td>
                    <td>{product.desperdicio}</td>
                    <td>{product.costo}</td>
                    <td>
                      <Link
                        to={`/edit/${product.id}`}
                        className='btn btn-sm btn-outline-primary'
                      >
                        <i className='fa-solid fa-pen-to-square'></i>
                      </Link>
                      <button
                        onClick={() => confirmDelete(product.id)}
                        className='btn btn-sm btn-outline-danger'
                      >
                        <i className='fa-solid fa-trash'></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
