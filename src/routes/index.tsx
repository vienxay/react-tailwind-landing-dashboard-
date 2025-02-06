import { createBrowserRouter, RouterProvider } from "react-router"
import MainLayout from "@/layouts/MainLayout"
import Home from "@/pages/Home"
// import { AppRouter } from '@/routes';
import Pricing from "@/pages/Pricing"
import Company from "@/pages/Company"
import Blog from "@/pages/Blog"
import Terms from "@/pages/Terms"
import Policy from "@/pages/Policy"
import Legal from "@/pages/Legal"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Forgotpassword from "@/pages/Forgotpassword"
import { ThemeProvider } from "@/contexts/ThemeProvider"
import DashboardLayout from "@/layouts/DashboardLayout"
import Dashboard from "@/pages/dashboard/Dashboard"
import Team from "@/pages/dashboard/Team"
import Projects from "@/pages/dashboard/Projects"
import Calendar from "@/pages/dashboard/Calendar"
import Documents from "@/pages/dashboard/Documents"
import Reports from "@/pages/dashboard/Reports"
import Settings from "@/pages/dashboard/Settings"
import Profile from "@/pages/dashboard/Profile"

const router = createBrowserRouter([
    {
        path: "/",
        // Main Layout
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/pricing",
                element: <Pricing />
            },
            {
                path: "/company",
                element: <Company />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/terms",
                element: <Terms />
            },
            {
                path: "/privacy",
                element: <Policy />
            },
            {
                path: "/legal",
                element: <Legal />
            },
        ]
    },
    {
        // Without Layout 
        path: '/login',
        element: <Login />
    },
    {
        // Without Layout 
        path: '/register',
        element: <Register />
    },
    {
        // Without Layout 
        path: '/forgotpassword',
        element: <Forgotpassword />
    },
    {
        // Dashboard Layout
        path: "/dashboard",
        // Main Layout
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "/dashboard/team",
                element: <Team />
            },
            {
                path: "/dashboard/projects",
                element: <Projects />
            },
            {
                path: "/dashboard/calendar",
                element: <Calendar />
            },
            {
                path: "/dashboard/documents",
                element: <Documents />
            },
            {
                path: "/dashboard/reports",
                element: <Reports />
            },
            {
                path: "/dashboard/settings",
                element: <Settings />
            },
            {
                path: "/dashboard/profile",
                element: <Profile />
            },
        ]
    }
])


export const  AppRouter = () => {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
    
}