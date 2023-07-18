import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../config/firebase.js"

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

function useUserInternal() {
  const [userState, setUserState] = useState({
    user: auth.currentUser,
    isLoading: auth.currentUser === null ? true : false,
    error: null,
  });
  const { user, isLoading, error } = userState;
  const isSignedIn = user !== null;
  const userId = isSignedIn ? user.uid : undefined;

  useEffect(() => {

    const onChange = (currentUser) => {
      setUserState({ user: currentUser, isLoading: false, error: null });
    };
    const onError = (error) => {
      console.error(error);
      setUserState({ user: null, isLoading: false, error });
    };
    const unsubscribe = auth.onAuthStateChanged(onChange, onError);
    return unsubscribe;
  }, []);

  
  return {
    user,
    userId,
    isLoading, 
    isSignedIn,
    error,
  };
}
export {AuthDetails};
export default useUserInternal;