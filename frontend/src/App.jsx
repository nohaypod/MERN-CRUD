import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home';
import Registro from './pages/Registro';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/Registro' elemeny={<Registro />} />
            <Route path='/register' element={ <RegisterPage />} />
            <Route path='/tasks' element={<h1>Creactividades</h1>} />
            <Route path='/add-task' element={<h1>new task</h1>} />
            <Route path='/task/:id' element={<h1>updatetask</h1>} />
            <Route path='/profile' element={<h1>Perfil</h1>} />
            
        </Routes>
    </BrowserRouter>
  )
}

export default App
