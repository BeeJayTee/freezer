import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignUp";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [match, setMatch] = useState("border-green-900");
  const [disabled, setDisabled] = useState(true);

  const { signup, error, isLoading } = useSignup();

  useEffect(() => {
    checkPasswords();
  }, [password, retypePassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  function checkPasswords() {
    if (retypePassword.length === 0) {
      setDisabled(true);
      return setMatch("border-green-900");
    }
    if (password === retypePassword) {
      setMatch("border-green-900");
      return setDisabled(false);
    } else {
      setMatch("border-red-600");
      return setDisabled(true);
    }
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRetypePasswordChange = (e) => {
    setRetypePassword(e.target.value);
  };

  return (
    <div className="container m-auto">
      <div className="flex mt-48">
        <form className="m-auto flex flex-col gap-y-2" onSubmit={handleSubmit}>
          <h1 className="text-xl font-bold mb-2">Sign Up</h1>
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
              onChange={handlePasswordChange}
              className={`border bg-green-100 ${match} rounded-md px-4 py-2 focus:outline-none`}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-xs">retype password</span>
            <input
              type="password"
              value={retypePassword}
              onChange={handleRetypePasswordChange}
              className={`border bg-green-100 ${match} rounded-md px-4 py-2 focus:outline-none`}
            />
          </label>
          <button
            disabled={disabled || isLoading}
            className={`
            border rounded-md px-4 py-2
            ${
              disabled || isLoading
                ? "bg-stone-200 text-stone-400"
                : "border-green-900 bg-green-400 hover:bg-green-500 text-inherit"
            }
            `}
          >
            Sign Up
          </button>
          {error && <div className="text-red-600">{error}</div>}
          <Link
            className="font-bold text-green-900 hover:text-green-600 w-fit"
            to="/login"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
