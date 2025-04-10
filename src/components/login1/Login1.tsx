import React from "react";
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Login1() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-blue-100 px-4 py-10">
      <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-xl rounded-3xl overflow-hidden bg-white">
        {/* Esquerda - Registro */}
        <div className="md:w-1/2 w-full bg-blue-500 text-white flex flex-col justify-center items-center p-10 md:rounded-tr-[80px] md:rounded-br-[80px]">
          <h2 className="text-3xl font-bold mb-4 text-center">Hello, Welcome!</h2>
          <p className="mb-6 text-center">Don't have an account?</p>
          <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-500 transition">
            Register
          </button>
        </div>

        {/* Direita - Login */}
        <div className="md:w-1/2 w-full p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Login
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Email"
              className="w-full px-4 py-2 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <div className="text-right text-sm text-blue-600 cursor-pointer hover:underline">
              Forgot password?
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
              Login
            </button>
          </form>

          <div className="mt-6 text-center text-gray-500 text-sm">
            or login with social platforms
          </div>

          <div className="flex justify-center mt-4 space-x-4 text-xl">
            <button className="bg-gray-400 border p-2 rounded-md hover:bg-gray-300 transition">
              <FaGoogle />
            </button>
            <button className="bg-gray-400 border p-2 rounded-md hover:bg-gray-300 transition">
              <FaFacebookF />
            </button>
            <button className="bg-gray-400 border p-2 rounded-md hover:bg-gray-300 transition">
              <FaGithub />
            </button>
            <button className="bg-gray-400 border p-2 rounded-md hover:bg-gray-300 transition">
              <FaLinkedinIn />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
