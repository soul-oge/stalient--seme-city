import { auth, db } from "../../config/firebase.js"
import {createUserWithEmailAndPassword } from "firebase/auth"
import {doc, setDoc } from "firebase/firestore"; 
import React, { useState } from "react";
import * as Components from "../component"
import {Link} from 'react-router-dom'

export const SignUp = () => {
    const all_score = {
        "Développement commercial":0,
        "Internatonal": 0,
        "R&D et Innovation":0,
        "Organisation et exploitation":0,
        "Capital humain":0,
        "Financement":0,
        "Business model":0
    }
    
    const[Email, setEmail] = useState("");
    const[Password, setPassword] = useState("");
    const[Name, setName] = useState("");
    const createUserDocument = async (user) => {
        if (!user) return;
      
        const userRef = doc(db, "users", user.uid);
        const { email } = user;
        try {
          await setDoc( userRef, {
            Name,
            email,
            createdAt: new Date(),
            all_score,
          });
        } catch (error) {
          console.log('Error in creating user', error);
        }
      }
    const signUp = async () => {
        try {
            const {user} = await createUserWithEmailAndPassword(auth, Email, Password)
            createUserDocument(user, Name)
        }catch(err){
             console.error(err)
        }
    }
    const [signin] = React.useState(true);
    return(
        <Components.Container>
        <Components.SignUpContainer signinIn={signin}>
        <Components.Title>Create Account</Components.Title>
        <Components.Input type='text' placeholder='Company Name' value={Name}
          onChange={(e) => setName(e.target.value)}/>
        <Components.Input type='email'placeholder='Email' value={Email}
          onChange={(e) => setEmail(e.target.value)} />
        <Components.Input type='password' placeholder='Password' 
          value={Password}
          onChange={(e) => setPassword(e.target.value)}/>
        <Link to="/quest">
            <Components.Button onClick={signUp}>Sign Up</Components.Button>
        </Link>
        </Components.SignUpContainer>
        <Components.OverlayContainer signinIn={signin}>
                  <Components.Overlay signinIn={signin}>
                  <Components.LeftOverlayPanel signinIn={signin}>
                      <Components.Title>Welcome Back!</Components.Title>
                      <Components.Paragraph>
                          To keep connected with us please login with your personal info
                      </Components.Paragraph>
                      <Link to='/signin'>
                        <Components.GhostButton >Sigin In</Components.GhostButton> 
                        </Link>
                      </Components.LeftOverlayPanel>
                  </Components.Overlay>
              </Components.OverlayContainer>
        </Components.Container>
    );
};
