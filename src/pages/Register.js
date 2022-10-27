import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../context/context";
import useRedirect from "../hooks/useRedirect";

const Register = () => {
  const { createUser, updateUser, user, googleSignIn } =
    useContext(DataContext);
  const redirect = useRedirect();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !fullName || !photoUrl) {
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters");
    } else if (fullName.length < 5) {
      setError("FullName must be at least 5 characters");
    } else {
      setLoading(true);
      await createUser(email, password);
      await updateUser(fullName, photoUrl);
      setFullName("");
      setPhotoUrl("");
      setError("");
      setEmail("");
      setPassword("");
      setLoading(false);
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
            Register
          </h1>
          {error && (
            <p className="text-secondary my-2 bg-gray-100 py-2 px-3 text-sm">
              {error}
            </p>
          )}
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-600 mb-1 text-sm block">
              Fullname
            </label>
            <input
              id="name"
              type="text"
              required
              name="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="your fullname"
              className="block py-2.5 px-3 w-full placeholder:text-sm placeholder:text-gray-400 focus:outline-none rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-600 mb-1 text-sm block">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="youremail@example.com"
              className="block py-2.5 px-3 w-full placeholder:text-sm placeholder:text-gray-400 focus:outline-none rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="img" className="text-gray-600 mb-1 text-sm block">
              Profile Photo
            </label>
            <input
              id="img"
              type="text"
              required
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              name="img"
              placeholder="profile photo url"
              className="block py-2.5 px-3 w-full placeholder:text-sm placeholder:text-gray-400 focus:outline-none rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-gray-600 mb-1 text-sm block"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="******"
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
                Register
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
            Already have an account?{" "}
            <Link
              to={`/login?redirect=${redirect}`}
              className="text-blue-500 capitalize"
            >
              login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
