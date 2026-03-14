import './App.css';

// Importamos los componentes
import Show from './components/show';
import Edit from './components/edit';
import Create from './components/create';

// Importamos el enrutador
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      {/* Añadimos el objeto future para eliminar los avisos de deprecación */}
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path='/' element={<Show />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
