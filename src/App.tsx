import "animate.css";
import "react-toastify/dist/ReactToastify.css";
import 'react-multi-carousel/lib/styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, useState } from "react";
import loader from "../src/assests/loader.gif";
import OrdersProvider from "./providers/OrderProvider";
import Header from "./components/header";
import Registration from "./components/Registration";
<<<<<<< HEAD
<<<<<<< HEAD
import Footer from "./components/footer"
const Home = React.lazy(() => import("./components/Home"));
=======

const Home = React.lazy(() => import("./pages/Home/Home"));
>>>>>>> feat/Customer-Review
=======

const Home = React.lazy(() => import("./pages/Home/Home"));
>>>>>>> feat/homepage
const SignIn = React.lazy(() => import("./components/Login"));
const SignUp = React.lazy(() => import("./components/Registration"));
const MenuItemDisplay = React.lazy(
  () => import("./components/MenuItemDisplay")
);
const FeedBackForm = React.lazy(
  () => import("./pages/CustomerFeedBack/CustomerFeedBack")
);
const NotFound = React.lazy(() => import("./pages/not-found/NotFound"));
// const MealDetail = React.lazy(() => import("./components/SingleMeal"));

function App() {
  const [authLogin, setAuthLogin] = useState(
    sessionStorage?.getItem("Auth") !== "" &&
      sessionStorage?.getItem("Auth") !== undefined
      ? sessionStorage?.getItem("Auth")
      : false
  );
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            <img src={loader} alt="loader" />
          </div>
        }
      >
        <Header/>
        <Routes>
          <Route
            path="/sign-in"
            element={<SignIn setAuthLogin={setAuthLogin} />}
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Registration" element={<Registration/>}/>
          {authLogin ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<SignIn setAuthLogin={setAuthLogin} />} />
          )}

          <Route
            path="/menu"
            element={
              <OrdersProvider>
                <MenuItemDisplay />
              </OrdersProvider>
            }
          />
          <Route
            path="/user-feedback"
            element={
              <FeedBackForm/>
            }
          />
        </Routes>
        <Footer/>

      </Suspense>
    </BrowserRouter>
  );
}

export default App;
