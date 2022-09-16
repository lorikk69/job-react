import React from 'react';
import Home from '../../Pages/Home/Home/Home';
import ForgotPassword from '../../Pages/Home/ForgotPassword/ForgotPassword'
import Register from '../../Pages/Home/Register/Register'
import ResetPassword from '../../Pages/Home/ResetPassword/ResetPassword'
import Login from '../../Pages/Home/Login/Login'
import VerifyAccount from '../../Pages/Home/VerifyAccount/VerifyAccount'
import JobList from '../../Pages/Home/JobList/JobList';
import Error from '../../Pages/Home/Error/Error'

export const routeData = {
    public: [
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'verify',
        element: <VerifyAccount />,
      },
      {
        path: 'Login',
        element: <Login />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'reset-password',
        element: <ResetPassword />,
      }
      
    ],
    exposed: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
    admin: [
      {
       path: 'find-job',
       element: <JobList/>
      },
    ],
    user: [{
      path: 'find-job',
      element: <JobList/>
    },
   ],
  }


