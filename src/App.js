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
import { UserAuth } from './context/AuthContext';
import UserDetail from './components/Dashboard/Score_Details';
import {useEffect} from 'react'
import AddAdmin from './components/madeAdmin'

function ProtectedRoute({ element: Component, adminOnly = false }) {
  const { user, role , loading} = UserAuth();
  if (!user) {
    return <Navigate to="/signin" />;
  }
  if (loading) {
    return null;
  }
  const isAdmin = role === 'admin';
  if (adminOnly && !isAdmin) {
    return <Navigate to='/quest' />;
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
        path="quest/"
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
        element={<ProtectedRoute adminOnly={true} element={<EditQcm />}/>}
      />
      <Route
        path="admin"
        element={<ProtectedRoute adminOnly={true} element={<Dashboard />}
        />}
      />
      <Route
        path="admin/:userId"
        element={<ProtectedRoute adminOnly={true} element={<UserDetail/>}/>
      }
      />
      <Route
        path="/addAdmin"
        element={<ProtectedRoute adminOnly={true} element={<AddAdmin/>}/>
      }
      />
      <Route path="*" element={<NoMatch />} />
    </Routes> 
    </AuthContextProvider>);
}

function NoMatch() {
    return (
      <div>
        <h2>Page introuvable</h2>
        <p>
          <Link to="/quest">aller a la page d'accueil</Link>
        </p>
      </div>
    );
  }
export default App;