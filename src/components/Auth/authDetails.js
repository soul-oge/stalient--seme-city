import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import { signOutUser } from "./AuthManage";
import { useAuth } from './useAuth';
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AuthDetails = () => {
  const {authUser, loading }= useAuth();
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
   <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4'>Account</h1>
      <p> <PersonIcon />User Email: {user && user.email}</p>

      <button onClick={handleLogout} className='border px-6 py-2 my-4'>
        Logout
      </button>
    </div>
  );
};

export {AuthDetails};