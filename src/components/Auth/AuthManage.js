// auth.js
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged , createUserWithEmailAndPassword} from 'firebase/auth';

const auth = getAuth();

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signOutUser() {
  return signOut(auth);
}

export function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function listenToAuthChanges(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}
