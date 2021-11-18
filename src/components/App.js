import SignUp from "./SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from "axios";

function App() {
  auth();
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

function auth() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      auth.currentUser.getIdToken(true).then((idtoken) => {
        console.log(idtoken);
        console.log("idtoken");
        const api = " http://139.59.12.232:8082/admin/products";
        axios.get(api, { headers: { "Authorization": `Bearer ${idtoken}` } })
          .then((res) => console.log(res.data)).catch((err) =>
            console.log(err)
          );
      });
    } else {
      console.log("logged out");
    }
  });
}
export default App;
