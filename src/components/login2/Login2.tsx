import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login2() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1120] text-white px-4 py-10">
      <div className="relative w-full max-w-5xl bg-[#0f172a] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Glow effect */}
        <div className="absolute inset-0 z-0 rounded-xl border border-cyan-400 blur-md opacity-30" />

        {/* Login section */}
        <div className="w-full md:w-1/2 z-10 p-10 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold text-white mb-2">Login</h2>
          <div className="space-y-4">
            <div className="flex items-center border-b border-gray-500 py-2">
              <FaUser className="mr-2 text-gray-400" />
              <input
                type="text"
                placeholder="Username"
                className="bg-transparent outline-none flex-1 text-white"
              />
            </div>
            <div className="flex items-center border-b border-gray-500 py-2">
              <FaLock className="mr-2 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none flex-1 text-white"
              />
            </div>
          </div>
          <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 py-2 rounded-full hover:opacity-90 transition">
            Login
          </button>
          <p className="text-sm text-center text-gray-400">
            Don’t have an account? <span className="text-cyan-400 cursor-pointer hover:underline">Sign Up</span>
          </p>
        </div>

        {/* Welcome section */}
        <div className="w-full md:w-1/2 z-10 p-10 bg-gradient-to-br from-cyan-500 to-blue-500 flex flex-col justify-center items-center clip-diagonal text-center text-[#0f172a]">
          <h2 className="text-3xl font-bold mb-4">WELCOME BACK!</h2>
          <p className="max-w-xs text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
      </div>

      {/* Custom clip path style */}
      <style>{`
        .clip-diagonal {
          clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
        }

        @media (max-width: 768px) {
          .clip-diagonal {
            clip-path: none;
          }
        }
      `}</style>
    </div>
  );
}
