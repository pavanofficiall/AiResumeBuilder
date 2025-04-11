import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from '@clerk/clerk-react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home.jsx'
import SignInPage from "./auth/sign-in/index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ResumeBuilder from "./pages/ResumeBuilder.jsx";
import { History } from "./pages/History.jsx";
import BuilderDashboard from "./builder_dashboard/index.jsx";
import EditResume from './builder_dashboard/resume/[resumeId]/edit/index.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        path:'/dashboard',
        element: <Dashboard/>,
      },
      {
        path:'/builder_dashboard',
        element: <BuilderDashboard/>,
      },
      {
        path:'/builder_dashboard/resume/:resumeId/edit',
        element: <EditResume/>,
      },
      {
        path:'/resume-builder',
        element: <ResumeBuilder/>,
      },
      {
        path:'/history',
        element: <History />,
      },
    ]
  },
   {
    path:'/',
    element: <Home/>,
  },
  {
    path:'/auth/sign-in',
    element: <SignInPage />,
  }
])

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
