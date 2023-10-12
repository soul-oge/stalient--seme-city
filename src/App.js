import "./global.css"
import {SignUp } from "./components/Auth/auth";
import { AuthContextProvider } from './context/AuthContext';
import {Routes, Route, Link, Navigate} from "react-router-dom";
import Home from './components/home';
import { AuthDetails } from "./components/Auth/authDetails";
import SignIn from "./components/Auth/SignIn";
import Questionnaires_page from './components/Questionnaire/questions-page'
import StartQcm from "./components/QCM/qcm-page";
import EditQcm from "./components/Edit/edit-qcm-page"
import Dashboard from "./components/Dashboard/dashboard"
import useUserInternal from "./components/Auth/authDetails";
import { useAuth } from './components/Auth/useAuth';
import { UserAuth } from './context/AuthContext';

function ProtectedRoute({ element: Component}) {
  const { user} = UserAuth();
  console.log(user);
  if (!user) {
    return <Navigate to='/signin'/>;
  }
  return Component;
}

const App = () => {
  return (
    <AuthContextProvider>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />

      <Route
        path="users/*"
        element={
          <ProtectedRoute
            element={<AuthDetails />}
          />
        }
      />
      <Route
        path="quest/*"
        element={
          <ProtectedRoute
            element={<Questionnaires_page />}
          />
        }
      />
      <Route
        path="quest/start_qcm/:id"
        element={
          <ProtectedRoute element={<StartQcm />}/>
        }
      />
      <Route
        path="quest/edit_qcm/:id"
        element={<ProtectedRoute element={<EditQcm />}/>}
      />
      <Route
        path="admin"
        element={<ProtectedRoute element={<Dashboard />}/>}
      />
      {/* <Route path="/quest" element={<Questionnaires_page />}/> */}
      {/* Les pages ci-dessous nécessitent une authentification
      <ProtectedRoute path="/users" element={<AuthDetails />} user={user} />
      <ProtectedRoute path="quest/start_qcm/:id" element={<StartQcm />} user={user} />
      <ProtectedRoute path="quest/edit_qcm/:id" element={<EditQcm />} user={user} />
      <ProtectedRoute path="admin" element={<Dashboard />} user={user} /> */}

      <Route path="*" element={<NoMatch />} />
    </Routes> 
    </AuthContextProvider>);
}

function NoMatch() {
    return (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }
export default App;