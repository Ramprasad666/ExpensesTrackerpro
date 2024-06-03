import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';




import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Signup from './Signup';

import LoginForm from './Login';
import Dashboard from './Dashboard';
import Detailoverview from './Detailoverview';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Signup />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<LoginForm/>} />
      <Route path="dashboard" element={<Dashboard/>} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/detail/:type" element={<Detailoverview/>} />
     
      
      
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
