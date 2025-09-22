import { Navigate } from 'react-router-dom';


import {jwtDecode} from 'jwt-decode';

 const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 < Date.now(); // true if expired
  } catch (error) {
    return true; // token invalid or corrupted
  }
};

export const AdminRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token || isTokenExpired(token)) {
    localStorage.removeItem('token');
    return <Navigate to="/admin" />;
  }

  return children;
};

export default AdminRoute;

