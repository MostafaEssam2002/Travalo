import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import toast, { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import './styles/main.scss'
import 'swiper/css';
import 'swiper/css/pagination';
createRoot(document.getElementById('root')).render(
  <Fragment>
    <Toaster />
      <App />
  </Fragment>
)
