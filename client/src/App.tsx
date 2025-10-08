import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// indexed pages
import {
  HomepageLayout,
  RegisterPage,
  ErrorPage,
  LoginPage,
  DashboardLayout,
  DashHome,
  ProfilePage,
} from "./utils";

import { action as registerAction } from "./utils/actionFunctions/registerActionFn";
import { action as loginAction } from "./utils/actionFunctions/LoginActionFn";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomepageLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "register",
          element: <RegisterPage />,
          action: registerAction,
        },
        {
          path: "login",
          element: <LoginPage />,
          action: loginAction,
        },
        {
          path: "dashboard",
          element: <DashboardLayout />,
          children: [
            {
              path: "home",
              element: <DashHome />,
            },
            {
              path: "profile",
              element: <ProfilePage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
