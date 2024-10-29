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
import MainMP from './assets/pages/MP/MainMP.jsx';
import WorkMP from "./assets/pages/MP/WorkMP.jsx";
import MainMKP from './assets/pages/MKP/MainMKP.jsx';
import WorkMKP from "./assets/pages/MKP/WorkMKP.jsx";
import MainVokasi from './assets/pages/Vokasi/MainVokasi.jsx';
import MainTO from './assets/pages/Vokasi/MainTO.jsx';
import WorkTO from "./assets/pages/Vokasi/WorkTO.jsx";
import MainTI from './assets/pages/Vokasi/MainTI.jsx';
import WorkTI from "./assets/pages/Vokasi/WorkTI.jsx";

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
  },{
    path: '/mp',
    element: <MainMP/>,
  },{
    path: '/mp/work',
    element: <WorkMP/>,
  },{
    path: '/mkp',
    element: <MainMKP/>,
  },{
    path: '/mkp/work',
    element: <WorkMKP/>,
  },{
    path: '/vokasi',
    element: <MainVokasi/>,
  },{
    path: '/to',
    element: <MainTO/>,
  },{
    path: '/to/work',
    element: <WorkTO/>,
  },{
    path: '/ti',
    element: <MainTI/>,
  },{
    path: '/ti/work',
    element: <WorkTI/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
