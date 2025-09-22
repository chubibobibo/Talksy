import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// indexed pages
import { HomepageLayout, LandingPage } from "./utils";

import { action as registerAction } from "./utils/actionFunctions/registerActionFn";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomepageLayout />,
      children: [
        {
          path: "/index",
          element: <LandingPage />,
          action: registerAction,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
