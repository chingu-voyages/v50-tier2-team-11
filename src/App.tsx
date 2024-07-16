import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { Suspense, useState } from 'react';
import loader from "../src/assests/loader.gif"


const Home = React.lazy(() => import('./Components/Home'));
const SignIn = React.lazy(() => import('./Components/Login'));
const SignUp = React.lazy(() => import('./Components/Registration'));

function App() {
  const [authLogin,setAuthLogin] = useState(sessionStorage?.getItem("Auth") != "" && sessionStorage?.getItem("Auth") != undefined ? sessionStorage?.getItem("Auth") : false)
  return (
    <BrowserRouter>
      <Suspense fallback={<div><img src={loader} alt="loader" /></div>}>
        <Routes>
          <Route path="/sign-in" element={<SignIn setAuthLogin={setAuthLogin} />} />
          <Route path="/sign-up" element={<SignUp />} />
          {authLogin ?
            <Route path="/" element={ <Home />} />
            :
            <Route path="/" element={ <SignIn setAuthLogin={setAuthLogin} />} />
          }
          
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;