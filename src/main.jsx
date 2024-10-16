import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css'
import App from './assets/pages/App.jsx'
import Main from './assets/pages/Main.jsx'
import Why from './assets/pages/Why.jsx'
import Prodi from './assets/pages/Prodi.jsx'
import Practice from './assets/pages/Practice.jsx'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Learn from './assets/pages/Learn.jsx';

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },{
    path: '/main',
    element: <Main/>,
  },{
    path: '/why',
    element: <Why/>,
  },{
    path: '/prodi',
    element: <Prodi/>,
  },{
    path: '/learn',
    element: <Learn/>,
  },{
    path: '/practice',
    element: <Practice/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
