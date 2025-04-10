import { useState } from "react";
import loginPages from "./pages/LoginPages";

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const LoginComponent = loginPages[pageIndex];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Menu superior */}
      <nav className="bg-gray-900 text-white px-4 py-2 flex gap-2 justify-center sticky top-0 z-50">
        {loginPages.map((_, index) => (
          <button
            key={index}
            onClick={() => setPageIndex(index)}
            className={`px-3 py-1 rounded ${
              index === pageIndex ? "bg-cyan-500 text-black" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Login{index + 1}
          </button>
        ))}
      </nav>

      {/* Página atual */}
      <main className="flex-grow">
        <LoginComponent />
      </main>
    </div>
  );
}

export default App;
