import { useState } from "react";
import { Link } from "react-router-dom";

import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("test@email.com");
  const [password, setPassword] = useState("ABCabc123!");

  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <div className="container m-auto">
      <div className="flex mt-48">
        <form className="m-auto flex flex-col gap-y-2" onSubmit={handleSubmit}>
          <h1 className="text-xl font-bold mb-2">Login</h1>
          <label className="flex flex-col">
            <span className="text-xs">email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border bg-green-100 border-green-900 rounded-md px-4 py-2"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-xs">password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border bg-green-100 border-green-900 rounded-md px-4 py-2"
            />
          </label>
          <button
            disabled={isLoading}
            className={`
            border rounded-md px-4 py-2
            ${
              isLoading
                ? "bg-stone-200 text-stone-400"
                : "border-green-900 bg-green-400 hover:bg-green-500 text-inherit"
            }
            `}
          >
            Login
          </button>
          {error && <div className="text-red-600">{error}</div>}
          <Link
            className="font-bold text-green-900 hover:text-green-600"
            to="/signup"
          >
            Signup
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
