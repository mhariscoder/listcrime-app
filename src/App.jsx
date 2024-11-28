import { useRef } from 'react'
import './App.css'

import { RouterProvider } from 'react-router-dom'
import router from './routes';
import LoadingBar from 'react-top-loading-bar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const ref = useRef();

  return (
    <>
      <LoadingBar color='var(--chakra-colors-brand-500)' ref={ref} height={5} />
      <ToastContainer theme="colored" position="top-right" />
      <RouterProvider router={router} />
    </>
  )
}

export default App
