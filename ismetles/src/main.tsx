import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewPizza from './pages/NewPizza'
import EditPizza from './pages/EditPizza';
import AllPizza from './pages/OnePizza';
import OnePizza from './pages/OnePizza';
import MainPage from './pages/MainPage';
import { ToastContainer, Zoom } from 'react-toastify';


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/new-pizza" element={<NewPizza />} />
        <Route path="/edit-pizza/:id" element={<EditPizza />} />
        <Route path="/all-pizza" element={<AllPizza />} />
        <Route path="/pizza/:id" element={<OnePizza />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer 
      position='top-center'
      theme='colored'
      limit={5}
      transition={Zoom}
      newestOnTop/>
  </StrictMode>
);
