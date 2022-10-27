import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../context/context";
import useRedirect from "../hooks/useRedirect";
import { HandleError } from "../utils/HandleError";

const Login = () => {
  const { user, loginWithEmailAndPassword, googleSignIn } =
    useContext(DataContext);
  const navigate = useNavigate();
  const redirect = useRedirect();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      try {
        setLoading(true);
        await loginWithEmailAndPassword(email, password);
        setError("");
        setEmail("");
        setPassword("");
        setLoading(false);
      } catch (error) {
        const errorMessage = HandleError(error.message);
        setError(errorMessage);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
  }, [navigate, redirect, user]);

  return (
    <section className="py-10 bg-light">
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 w-full mx-auto py-8 px-8 bg-primary rounded shadow-md"
        >
          <h1 className="text-2xl font-bold mb-5 text-center uppercase">
            Login
          </h1>
          {error && (
            <p className="text-secondary my-2 bg-gray-100 py-2 px-3 text-sm">
              {error}
            </p>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-600 mb-1 text-sm block">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              id="email"
              placeholder="youremail@example.com"
              className="block py-2.5 px-3 w-full placeholder:text-sm placeholder:text-gray-400 focus:outline-none rounded"
            />
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="password" className="text-gray-600 text-sm">
                Password
              </label>
              <p className="text-xs text-gray-500 hover:text-secondary hover:underline cursor-pointer">
                Forgot Password?
              </p>
            </div>
            <input
              type="password"
              name="password"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              id="password"
              className="block py-2.5 px-3 w-full placeholder:text-sm placeholder:text-gray-400 focus:outline-none rounded"
            />
          </div>

          <div className="mb-4 grid grid-cols-4 gap-5">
            {loading ? (
              <button className="cursor-wait py-2.5 w-full bg-gray-200 text-bg-gray-600 capitalize text-sm rounded col-span-4">
                Loading...
              </button>
            ) : (
              <button
                type="submit"
                className="py-2.5 w-full bg-secondary text-white capitalize text-sm rounded col-span-4"
              >
                login
              </button>
            )}
            <div className="col-span-4 text-center font-bold text-xs text-gray-500">
              OR
            </div>
            <div
              onClick={googleSignIn}
              className="py-2.5 text-center cursor-pointer w-full bg-white text-gray-900 capitalize text-sm rounded col-span-2"
            >
              Google
            </div>
            <div className="py-2.5 text-center cursor-pointer w-full bg-gray-900 text-white capitalize text-sm rounded col-span-2">
              Github
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-2 text-right">
            Create a new account{" "}
            <Link
              to={`/register?redirect=${redirect}`}
              className="text-blue-500 capitalize"
            >
              register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
