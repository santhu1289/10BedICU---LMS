import "./App.css";
import Login from "./auth/Login";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import SignUp from "./auth/SignUp";
import HeroSection from "./components/HeroSection";
import MainLayout from "./layout/MainLayout";
import Profile from "./components/Profile";
import Categories from "./components/Categories";
import OnlineCategory from "./components/OnlineCategory";
import HandsonCategory from "./components/HandsonCategory";
import CourseDetails from "./components/CourseDetails";
import React, { useEffect } from "react";
import { useUserStore } from "./store/useUserStore";
import AdminPanel from "./admin/AdminPanel";

import Loading from "./components/Loading";
const AdminRoutes = ({ children }: { children: React.ReactNode }) => {
  const { user, isAuthenticated } = useUserStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (!user?.admin) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useUserStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
const AuthenticatedUser = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useUserStore();
  if (isAuthenticated && user?.isVerified) {
    return <Navigate to="/" replace />;
  }
  return children;
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <MainLayout />
      </ProtectedRoutes>
    ),
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
      {
        path: "/coursedetails/:id",
        element: <CourseDetails />,
      },
      //Admin Panel start here
      {
        path: "/adminpanel",
        element: (
          <AdminRoutes>
            <AdminPanel />
          </AdminRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <AuthenticatedUser>
        <Login />
      </AuthenticatedUser>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthenticatedUser>
        <SignUp />
      </AuthenticatedUser>
    ),
  },
]);
function App() {
  const {checkAuthentication, isCheckingAuth} = useUserStore();
  // checking auth every time when page is loaded
  useEffect(()=>{
    checkAuthentication();
    
  },[checkAuthentication])

  if(isCheckingAuth) return <Loading/>
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
}

export default App;
