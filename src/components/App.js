import SignUp from "./SignUp";
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from "../context/AuthContext";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Home";
import Login from "./Login";
import { FirebaseError } from "@firebase/util";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
