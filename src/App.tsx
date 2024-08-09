import "animate.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, useState } from "react";
import loader from "../src/assests/loader.gif";
import OrdersProvider from "./providers/OrderProvider";
import Header from "./components/header";
import Registration from "./components/Registration";
import Map from "./pages/Map/Map";

const Home = React.lazy(() => import("./components/Home"));
const SignIn = React.lazy(() => import("./components/Login"));
const SignUp = React.lazy(() => import("./components/Registration"));
const MenuItemDisplay = React.lazy(
  () => import("./components/MenuItemDisplay")
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
        <Header />
        <Routes>
          <Route
            path="/sign-in"
            element={<SignIn setAuthLogin={setAuthLogin} />}
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Registration" element={<Registration />} />
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
          <Route path="/map" element={<Map />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
