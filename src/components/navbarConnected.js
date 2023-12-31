import React from 'react';
import useUserInternal from "./Auth/authDetails";
import PersonIcon from '@mui/icons-material/Person';
import Logo from "../assets/logo.jpeg";
import { useAuth } from './Auth/useAuth';
import { UserAuth } from '../context/AuthContext';

const AuthenticatedNavbar = () => {
  const { user, role} = UserAuth();
  const isAdmin = role === 'admin'
  return (
<nav className="flex items-center justify-between p-4">
  <div className="nav-logo-container">
    <img src={Logo} alt="" />
  </div>
  <div className="navbar-links-container flex items-center space-x-4">
    <a href="/">Home</a>
    {isAdmin && (<a href="/admin">Dashboard</a>)}
    {user? (
      <a href="/users" className="flex items-center">
        <PersonIcon className="mr-2" /> {`Connecter avec ${user.email}`}
      </a>
    ) : (
      <p>Signed Out</p>
    )}
    </div>
    </nav>
  );
};

export default AuthenticatedNavbar;
