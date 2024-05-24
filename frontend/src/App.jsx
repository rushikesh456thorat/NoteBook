import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./assets/components/pages/login/login";
import SingUp from "./assets/components/pages/signup/signup";
import Dashboard from "./assets/components/pages/dashboard/dashboard";
import NoteBook from "./assets/components/pages/notebook/notebook";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./assets/context/AuthContext";
import ChangePassword from "./assets/components/utils/changepassword";
import HomePage from "./assets/components/pages/dashboard/homepage";

function App() {

  const {authUser} = useAuthContext();

  return (
    <>
      <div className="h-full w-screen flex items-center justify-center scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        <Routes>
          <Route path="/" element={authUser ? <Navigate to='/dashboard'/> : <HomePage/>}></Route>
          <Route path= "/dashboard" element={!authUser ? <Navigate to='/login'/> :<Dashboard/>}></Route>
          <Route path="/notebook/:id" element={!authUser ? <Navigate to='/login'/> :<NoteBook/>}></Route>
          <Route path="/password/change" element={!authUser ? <Navigate to='/login'/> :<ChangePassword/>}></Route>
          <Route path="/notebook" element={<Navigate to='/'/>}></Route>
          <Route path="/login" element={authUser ? <Navigate to='/dashboard'/> :<Login/>}></Route>
          <Route path="/signup" element={authUser ? <Navigate to='/dashboard'/> : <SingUp/>}></Route>
        </Routes>
        <Toaster/>
      </div>
      
    </>
  );
}

export default App;
