import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../../hooks/useLogin.js";
import Footer from "../../utils/footer.jsx";


const Login = () => {
  const [inputs, setinputs] = useState({
    email: "",
    password: "",
  });

  document.title = "NoteBook - Login"

  // eslint-disable-next-line no-unused-vars
  const {loading, login} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs);
    console.log(inputs)
  };
  return (
    <>
      <div className="flex flex-col w-full min-h-screen">
            <div className="flex-grow flex justify-center items-center">
                <div className="min-w-96 p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
          <h1 className=" font-semibold text-3xl text-gray-300 text-center">
            Login Note<span className=" text-blue-500">Book</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Email"
              value={inputs.email}
              onChange={(e) => setinputs({ ...inputs, email: e.target.value })}
            />
            <label className="label font-semibold">Password</label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Password"
              value={inputs.password}
              onChange={(e) =>
                setinputs({ ...inputs, password: e.target.value })
              }
            />

            <Link to="/signup" className="link link-info mt-2  block">
              Don&apos;t have account? SingUp
            </Link>
            <button className="btn btn-primary w-full mt-4" disabled={loading}>
               {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </form>
        </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Login;
