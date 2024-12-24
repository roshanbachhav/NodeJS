import "./App.css";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
      errorElement: <Error />,
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <LoginPage />
        </>
      ),
      errorElement: <Error />,
    },
    {
      path: "/Register",
      element: (
        <>
          <Navbar />
          <Registration />
        </>
      ),
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={appRoute} />;
}

export default App;
