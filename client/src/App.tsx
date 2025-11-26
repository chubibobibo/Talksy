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
  WelcomeNewUserPage,
} from "./utils";

import { action as registerAction } from "./utils/actionFunctions/registerActionFn";
import { action as loginAction } from "./utils/actionFunctions/LoginActionFn";
import { action as updateProfileAction } from "./utils/actionFunctions/updateProfileActionFn";
import { loader as loaderUserData } from "./utils/loaderFunctions/profilePageLoader";

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
          path: "welcome-user",
          element: <WelcomeNewUserPage />,
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
              path: "profile/:id",
              element: <ProfilePage />,
              loader: loaderUserData,
              action: updateProfileAction,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
