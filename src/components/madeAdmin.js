import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material/';
import { db } from "../config/firebase";
import CustomMenuItem from './utile/customMenuItem';
import { getDocs, collection, doc, updateDoc} from "firebase/firestore";

const AddAdmin = () => {
 const [users, setUsers] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
    const snapshot = await getDocs(collection(db, "users"));
    setUsers(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
    };
    fetchData();
 }, []);

 const handleChangeRole = async (userId, newRole) => {
    const docRef = doc(db, 'users', userId)
    await updateDoc(docRef, {
        role : newRole,
    })
   };
 return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.data.name}</TableCell>
              <TableCell>{user.data.email}</TableCell>
              <TableCell>{user.data.role}</TableCell>
              <TableCell>
                <CustomMenuItem
                    id={user.id}
                    role={user.data.role}
                    newRole="admin"
                    onChange={handleChangeRole}
                />
                <CustomMenuItem
                    id={user.id}
                    role={user.data.role}
                    newRole="user"
                    onChange={handleChangeRole}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 );
};

export default AddAdmin;