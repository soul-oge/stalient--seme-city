import React, { useState } from "react";
import * as Components from "../component"
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSignIn = async (e) => {
    setIsLoading(true);
    try {
      await signIn(email, password)
      navigate('/quest')
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false)
      console.log(e.message)
    }
  };
  const [signin] = React.useState(true);
  return (
    <Components.Container>
      <Components.SignInContainer signinIn={signin}>
        <Components.Title>Sign In</Components.Title>
        <Components.Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Components.Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Components.Anchor href="#">Forgot your password?</Components.Anchor>
        <Components.Button onClick={handleSignIn} disabled={isLoading}>{isLoading ? 'Chargement...' : 'Sign In'}</Components.Button>
      </Components.SignInContainer>
      <Components.OverlayContainer signinIn={signin}>
        <Components.Overlay signinIn={signin}>
          <Components.RightOverlayPanel signinIn={signin}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>Enter your personal details and start your journey with us.</Components.Paragraph>
            <Link to="/signup">
              <Components.GhostButton>Sign Up</Components.GhostButton>
            </Link>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
  
};

export default SignIn;