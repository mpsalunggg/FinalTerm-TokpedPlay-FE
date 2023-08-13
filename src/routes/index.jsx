import { Route, Routes } from 'react-router-dom'
import { Error, Home, Login, Product, Profile, Register } from '../pages'
import PrivateRoute from './PrivateRoute'
// import ProtectedRoute from './PrivateRoute'

const RoutesComp = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          // <ProtectedRoute>
          <Home />
          // {/* </ProtectedRoute> */}
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/profile/:id"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path="/product/:id" element={<Product />}/>
      <Route path="*" element={<Error />} />
    </Routes>
  )
}
export default RoutesComp
