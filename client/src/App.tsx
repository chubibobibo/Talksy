import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// indexed pages
import { HomepageLayout, LandingPage, RegisterPage, ErrorPage } from "./utils";

import { action as registerAction } from "./utils/actionFunctions/registerActionFn";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomepageLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/register",
          element: <RegisterPage />,
          action: registerAction,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
