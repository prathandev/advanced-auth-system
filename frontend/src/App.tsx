import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
import Home from './pages/Home.tsx'
import NotFound from './pages/NotFound.tsx'
import OtpLogin from './pages/OtpLogin.tsx'
import VerifyEmail from './pages/VerifyEmail.tsx'
import { Toaster } from './components/ui/sonner.tsx'
import ForgotPassword from './pages/ForgotPassword.tsx'
import ResetPassword from './pages/ResetPassword.tsx'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/otp-login',
    element: <OtpLogin/>
  },
  {
    path: '/verify-otp',
    element: <VerifyEmail/>
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword/>
  },
  {
    path: '/reset-password',
    element: <ResetPassword/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

function App() {

  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
      <Toaster />
    </>
  )
}

export default App
