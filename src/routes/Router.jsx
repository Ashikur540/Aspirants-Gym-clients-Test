

import { createBrowserRouter } from "react-router-dom";
import { Exercise } from "../features/exercises/pages/Exercise";
import Authentication from "../layouts/Authentication";
import Main from "../layouts/Main";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ExercisesWorkOut from "../features/exercises/pages/ExercisesWorkOut";


export const router = createBrowserRouter([
   //! /* ----------------------------- Main routes ----------------------------- */
    {
        path: '/',
        element: <Main />,
        children : [
            {
                path: '/', element: <Home />
            },
            {
                path: '/about', element: <About />
            },
        ]
    },



   //! /* ----------------------------- Auth routes ----------------------------- */
    {
        path: '/authentication',
        element: <Authentication />,
        children : [
            {
                path: '/authentication/login', element: <Login />
            },
            {
                path: '/authentication/register', element: <Register />
            },
        ]
    },
    
    {
        path: '/dashboard/exercise', element: <Exercise />
    },
    {
        path: '/dashboard/workOut', element: <ExercisesWorkOut></ExercisesWorkOut>
    },

])