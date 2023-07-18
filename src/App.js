import "./global.css"
import {SignUp } from "./components/Auth/auth";
import { Routes, Route, Link} from "react-router-dom";
import Home from './components/home';
import { AuthDetails } from "./components/Auth/authDetails";
import SignIn from "./components/Auth/SignIn";
import Questionnaires_page from './components/Questionnaire/questions-page'
import StartQcm from "./components/QCM/qcm-page";
import EditQcm from "./components/Edit/edit-qcm-page"
import Dashboard from "./components/Dashboard/dashboard"

const App = () => (
    <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home/>} />
        <Route path ="/signin" element={<SignIn/>} />
        <Route path ="/users" element={<AuthDetails/>} />
        <Route path="/quest" element={<Questionnaires_page/>} />
        <Route path="quest/start_qcm/:id" element={<StartQcm/>}/>
        <Route path="quest/edit_qcm/:id" element={<EditQcm/>}/>
        <Route path="admin" element={<Dashboard/>}/>
        <Route path="*" element={<NoMatch />} />
    </Routes>
)

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