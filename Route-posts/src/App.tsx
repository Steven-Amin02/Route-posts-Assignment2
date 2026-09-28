import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthLayout from "./layouts/AuthLayout";

import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import MainLayout from "./layouts/MainLayout";
import Newsfeed from "./Pages/Newsfeed/Newsfeed";
import Notification from "./Pages/Notification/Notification";
import Profile from "./Pages/Profile/Profile";
function App() {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { index: true, element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    {
      path: "",
      element: <MainLayout />,
      children: [
        { index: true, element: <Newsfeed /> },
        { path: "notification", element: <Notification /> },
        { path: "profile", element: <Profile /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
