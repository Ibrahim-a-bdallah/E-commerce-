import { RouterProvider,createBrowserRouter } from "react-router-dom"

import { lazy } from "react";

// mainLayout 
const MainLayout = lazy(()=> import ("../layout/MainLayout"))
// pages 
const Home = lazy(() => import("../pages/home/Home"))
const Blog = lazy(() => import("../pages/Blog/BlogPage"))


import Error from "../pages/Error";
import LoadingSpinner from "../components/feedback/lottieHandler/SuspenseHandler";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LoadingSpinner type="loading"   >
        <MainLayout />
      </LoadingSpinner>
    
    )
    ,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element:
        <LoadingSpinner>
          <Home />
        </LoadingSpinner>
        ,
      },
      {
        path: "blog",
        element:
        <Blog/>
      },
      // {
      //   path: "about",
      //   element:
      //     <About />
      // },
      // {
      //   path: "contact",
      //   element:
      //     <Contect />
      // },
      // {
      //   path: "checkout",
      //   element:
      //     <CheckOut />
      // },
      
    ],
  },
])
  ;

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
