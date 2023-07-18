import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase.js"
import React, { useState } from "react";
import * as Components from "../component"
import {Link} from 'react-router-dom'

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [signin] = React.useState(true);
  return (
    <Components.Container>
    <Components.SignInContainer signinIn={signin}>
                       <Components.Title>Sign in</Components.Title>
                       <Components.Input type='email' placeholder='Email' value={email}
                         onChange={(e) => setEmail(e.target.value)}/>
                       <Components.Input type='password' placeholder='Password' 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}/>
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                       <Link to="/quest">
                          <Components.Button onClick={signIn}>Sign In</Components.Button>
                       </Link>
              </Components.SignInContainer>
              <Components.OverlayContainer signinIn={signin}>
                  <Components.Overlay signinIn={signin}>
        <Components.RightOverlayPanel signinIn={signin}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                        <Link to='/signup'>
                        <Components.GhostButton >Sigin Up
                            </Components.GhostButton> 
                        </Link>
                      </Components.RightOverlayPanel>
                      </Components.Overlay>
              </Components.OverlayContainer>
             

</Components.Container>
  );
};

export default SignIn;