import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, useState } from 'react';
import loader from "../src/assests/loader.gif"

const Home = React.lazy(() => import('./components/Home'));
const SignIn = React.lazy(() => import('./components/Login'));
const SignUp = React.lazy(() => import('./components/Registration'));
const MenuItemDisplay = React.lazy(() => import('./components/menuItemDisplay'));
const NotFound = React.lazy(() => import('./Pages/NotFound/NotFound'));

function App() {
  const [authLogin,setAuthLogin] = useState(sessionStorage?.getItem("Auth") != "" && sessionStorage?.getItem("Auth") != undefined ? sessionStorage?.getItem("Auth") : false)
  return (
    <BrowserRouter>
    
      <Suspense fallback={<div className='flex items-center justify-center'><img src={loader} alt="loader" /></div>}>
        
        <Routes>
          <Route path="/sign-in" element={<SignIn setAuthLogin={setAuthLogin} />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          {authLogin ?
            <Route path="/" element={ <Home />} />
            :
            <Route path="/" element={ <SignIn setAuthLogin={setAuthLogin} />} />
          }
          <Route path="/menu" element={<MenuItemDisplay/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;