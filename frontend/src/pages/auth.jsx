// import { useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useNavigate } from "react-router-dom"; // Make sure react-router-dom is installed

// function Auth() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const toggleForm = () => setIsLogin(!isLogin);
//   const togglePassword = () => setShowPassword(!showPassword);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (email === "rahul" && password === "rahul123") {
//       document.cookie = `username=${email}; path=/`;
//       document.cookie = `password=${password}; path=/`;
//       navigate("/home"); // Make sure your route is set up for /home
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white">
//       <div className="bg-black bg-opacity-90 p-10 rounded-md w-full max-w-md">
//         {isLogin ? (
//           <div>
//             <h1 className="text-3xl font-bold mb-6">Login</h1>
//             <form className="flex flex-col gap-4" onSubmit={handleLogin}>
//               <input
//                 type="text"
//                 placeholder="Username"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="p-3 rounded bg-gray-800 text-white outline-none"
//               />
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="p-3 rounded bg-gray-800 text-white outline-none w-full"
//                 />
//                 <span
//                   className="absolute right-3 top-3 cursor-pointer text-gray-400"
//                   onClick={togglePassword}
//                 >
//                   {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//                 </span>
//               </div>
//               <button
//                 type="submit"
//                 className="bg-red-600 py-3 rounded font-bold hover:bg-red-700 transition"
//               >
//                 Login
//               </button>
//             </form>
//             <p className="mt-4 text-gray-400">
//               New to Netflix?{" "}
//               <span
//                 onClick={toggleForm}
//                 className="text-white cursor-pointer hover:underline"
//               >
//                 Register now
//               </span>
//             </p>
//           </div>
//         ) : (
//           <div>
//             <h1 className="text-3xl font-bold mb-6">Register</h1>
//             <form className="flex flex-col gap-4">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="p-3 rounded bg-gray-800 text-white outline-none"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="p-3 rounded bg-gray-800 text-white outline-none"
//               />
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Password"
//                   className="p-3 rounded bg-gray-800 text-white outline-none w-full"
//                 />
//                 <span
//                   className="absolute right-3 top-3 cursor-pointer text-gray-400"
//                   onClick={togglePassword}
//                 >
//                   {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//                 </span>
//               </div>
//               <div className="relative">
//                 <input
//                   type="password"
//                   placeholder="Retype Password"
//                   className="p-3 rounded bg-gray-800 text-white outline-none w-full"
//                 />
//               </div>
//               <button className="bg-red-600 py-3 rounded font-bold hover:bg-red-700 transition">
//                 Register
//               </button>
//             </form>
//             <p className="mt-4 text-gray-400">
//               Already have an account?{" "}
//               <span
//                 onClick={toggleForm}
//                 className="text-white cursor-pointer hover:underline"
//               >
//                 Login
//               </span>
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Auth;








// the updated code version 

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setFullName("");
  };

  const togglePassword = () => setShowPassword(!showPassword);

  // ✅ LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Login successful!");
        document.cookie = `user=${data.user.email}; path=/`;
         navigate("/tvshow");
        // navigate("/home");
      } else {
        alert(`❌ Login failed: ${data.error || data.message}`);
      }
    } catch (error) {
      alert("❌ Server error. Please try again later.");
    }
  };

  // ✅ REGISTER
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Registration successful! Please login.");
        setIsLogin(true);
        setFullName("");
        setEmail("");
        setPassword("");
      } else {
        alert(`❌ Registration failed: ${data.message}`);
      }
    } catch (error) {
      alert("❌ Server error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-black bg-opacity-90 p-10 rounded-md w-full max-w-md">
        {isLogin ? (
          <div>
            <h1 className="text-3xl font-bold mb-6">Login</h1>
            <form className="flex flex-col gap-4" onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded bg-gray-800"
                required
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 rounded bg-gray-800 w-full"
                  required
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer"
                  onClick={togglePassword}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>

              <button className="bg-red-600 py-3 rounded font-bold">
                Login
              </button>
            </form>

            <p className="mt-4 text-gray-400">
              New to Netflix?{" "}
              <span
                onClick={toggleForm}
                className="text-white cursor-pointer"
              >
                Register now
              </span>
            </p>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold mb-6">Register</h1>
            <form className="flex flex-col gap-4" onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="p-3 rounded bg-gray-800"
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded bg-gray-800"
                required
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 rounded bg-gray-800 w-full"
                  required
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer"
                  onClick={togglePassword}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>

              <button className="bg-red-600 py-3 rounded font-bold">
                Register
              </button>
            </form>

            <p className="mt-4 text-gray-400">
              Already have an account?{" "}
              <span
                onClick={toggleForm}
                className="text-white cursor-pointer"
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
