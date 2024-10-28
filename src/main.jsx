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
import Facility from './assets/pages/Facility.jsx'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Learn from './assets/pages/Learn.jsx';
import Work from './assets/pages/Work.jsx';
import Achievement from './assets/pages/Achievement.jsx';
import Testimoni from './assets/pages/Testimoni.jsx';
import Organization from './assets/pages/Organization.jsx';
import PathRegistration from './assets/pages/PathRegistration.jsx';
import InfoPMB from './assets/pages/InfoPMB.jsx';
import Placement from './assets/pages/Placement.jsx';
import Education from './assets/pages/Education.jsx';

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
    path: '/education',
    element: <Education/>,
  },{
    path: '/learn',
    element: <Learn/>,
  },{
    path: '/practice',
    element: <Practice/>,
  },{
    path: '/facility',
    element: <Facility/>,
  },{
    path: '/work',
    element: <Work/>,
  },{
    path: '/achievement',
    element: <Achievement/>,
  },{
    path: '/testimoni',
    element: <Testimoni/>,
  },{
    path: '/organization',
    element: <Organization/>,
  },{
    path: '/pathregistration',
    element: <PathRegistration/>,
  },{
    path: '/infopmb',
    element: <InfoPMB/>,
  },{
    path: '/placement',
    element: <Placement/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
