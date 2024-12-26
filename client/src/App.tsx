import "./App.css";
import Login from "./auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignUp from "./auth/SignUp";
import HeroSection from "./components/HeroSection";
import MainLayout from "./layout/MainLayout";
import Profile from "./components/Profile";
import Categories from "./components/Categories";
import OnlineCategory from "./components/OnlineCategory";
import HandsonCategory from "./components/HandsonCategory";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/courses",
        element: <Categories />,
      },
      {
        path: "/onlinecourse",
        element: <OnlineCategory />,
      },
      {
        path: "/handsoncourses",
        element: <HandsonCategory />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
function App() {
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
}

export default App;
