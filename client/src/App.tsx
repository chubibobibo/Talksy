import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// indexed pages
import { HomepageLayout, LandingPage, RegisterPage } from "./utils";

import { action as registerAction } from "./utils/actionFunctions/registerActionFn";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomepageLayout />,
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
