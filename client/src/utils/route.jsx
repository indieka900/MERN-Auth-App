import Register from "../components/Register";
import Username from "../components/Username";
import Password from "../components/Password";
import Profile from "../components/Profile";
import Recovery from "../components/Recovery";
import Reset from "../components/Reset";
import PageNotFound from "../components/PageNotFound.jsx";
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/',
    element: <Username />
  },
  {
    path: '/password',
    element: <Password />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/recovery',
    element: <Recovery />
  },
  {
    path: '/reset',
    element: <Reset />
  },
  {
    path: '*',
    element: <PageNotFound />
  },
]);