import React, { useEffect, useState } from "react";

export default function Login3() {
  const segments = 50;
  const bars = Array.from({ length: segments });
  const [isMobile, setIsMobile] = useState(false);
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % segments);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const translateY = isMobile ? -170 : -210;

  return (
    <div className="min-h-screen bg-[#0b1120] flex items-center justify-center px-4 text-white">
      <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] flex items-center justify-center">
        <div className="absolute w-[300px] h-[300px] sm:w-[460px] sm:h-[460px] flex items-center justify-center z-0">
          {bars.map((_, i) => {
            const diff = Math.abs((i - frame + segments) % segments);
            const distance = Math.min(diff, segments - diff);

            const pulse = Math.max(1, 2 - distance * 0.1); 

            return (
              <span
                key={i}
                className="absolute w-[4px] rounded-full bg-gradient-to-b from-cyan-400 to-blue-500 transition-all duration-75"
                style={{
                  height: `${20 * pulse}px`,
                  transform: `rotate(${(360 / segments) * i}deg) translateY(${translateY}px)`,
                  opacity: 0.8
                }}
              />
            );
          })}
        </div>
        <div className="relative z-10 w-[85%] max-w-[280px] px-2">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Login</h2>
          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-full bg-transparent border border-cyan-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-full bg-transparent border border-cyan-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <div className="text-sm text-center text-gray-400 cursor-pointer hover:underline">
              Forgot your password?
            </div>
            <button className="w-full bg-cyan-400 text-[#0f172a] font-bold py-2 rounded-full hover:bg-cyan-300 transition">
              Login
            </button>
          </form>
          <div className="text-center mt-4 text-cyan-400 text-sm cursor-pointer hover:underline">
            Signup
          </div>
        </div>
      </div>
    </div>
  );
}
