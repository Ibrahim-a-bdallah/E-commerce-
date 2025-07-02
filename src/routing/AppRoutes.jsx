import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { lazy } from "react";


// mainLayout
const MainLayout = lazy(() => import("../layout/MainLayout"));
// pages
const Home = lazy(() => import("../pages/home/Home"));
const Blog = lazy(() => import("../pages/Blog/BlogPage"));
const CheckOut = lazy(() => import("../pages/Checkout"));
const Contect = lazy(() => import("../pages/contact/Contact"));
const About = lazy(() => import("../pages/About/AboutUs"));
const Shop = lazy(() => import("../pages/Shop"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const Category = lazy(() => import("../pages/catogaries/[catogary]/index"));
const Login = lazy(() => import("../pages/Login/Login"));

// mainLayout 
const MainLayout = lazy(()=> import ("../layout/MainLayout"))
// pages 
const Home = lazy(() => import("../pages/home/Home"))
const Blog = lazy(() => import("../pages/Blog/BlogPage"))
const CheckOut = lazy(() => import("../pages/Checkout"))
const Contect = lazy(() => import("../pages/contact/Contact"))
const About = lazy(() => import("../pages/About/AboutUs"))
const Shop = lazy(() => import("../pages/Shop"))
const Cart = lazy(() => import("../pages/Cart/Cart"))


import Error from "../pages/Error";
import LoadingSpinner from "../components/feedback/lottieHandler/SuspenseHandler";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LoadingSpinner type="loading">
        <MainLayout />
      </LoadingSpinner>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <LoadingSpinner>
            <Home />
          </LoadingSpinner>
        ),
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contect />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "category/:category",

        element: <Category />,
      },

        element:
        <Shop />
      },    

      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
export const AppRoutes = () => {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
};
