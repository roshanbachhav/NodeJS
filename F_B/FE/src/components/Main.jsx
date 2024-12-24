import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./LoginPage";
import Registration from "./Registration";
import Error from "./Error";
import Home from "./Home";

const Main = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Home />,
          errorElement: <Error />,
        },
        {
          path: "/login",
          element: <LoginPage />,
          errorElement: <Error />,
        },
        {
          path: "/Register",
          element: <Registration />,
          errorElement: <Error />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRoute} />;
};

export default Main;
