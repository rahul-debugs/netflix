import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Install react-icons: npm install react-icons

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  const toggleForm = () => setIsLogin(!isLogin);
  const togglePassword = () => setShowPassword(!showPassword);
  const toggleRetypePassword = () => setShowRetypePassword(!showRetypePassword);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-black bg-opacity-90 p-10 rounded-md w-full max-w-md">
        {isLogin ? (
          <div>
            <h1 className="text-3xl font-bold mb-6">Login</h1>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded bg-gray-800 text-white outline-none"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="p-3 rounded bg-gray-800 text-white outline-none w-full"
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer text-gray-400"
                  onClick={togglePassword}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
              <button className="bg-red-600 py-3 rounded font-bold hover:bg-red-700 transition">
                Login
              </button>
            </form>
            <p className="mt-4 text-gray-400">
              New to Netflix?{" "}
              <span
                onClick={toggleForm}
                className="text-white cursor-pointer hover:underline"
              >
                Register now
              </span>
            </p>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold mb-6">Register</h1>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 rounded bg-gray-800 text-white outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded bg-gray-800 text-white outline-none"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="p-3 rounded bg-gray-800 text-white outline-none w-full"
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer text-gray-400"
                  onClick={togglePassword}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
              <div className="relative">
                <input
                  type={showRetypePassword ? "text" : "password"}
                  placeholder="Retype Password"
                  className="p-3 rounded bg-gray-800 text-white outline-none w-full"
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer text-gray-400"
                  onClick={toggleRetypePassword}
                >
                  {showRetypePassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
              <button className="bg-red-600 py-3 rounded font-bold hover:bg-red-700 transition">
                Register
              </button>
            </form>
            <p className="mt-4 text-gray-400">
              Already have an account?{" "}
              <span
                onClick={toggleForm}
                className="text-white cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Auth;
