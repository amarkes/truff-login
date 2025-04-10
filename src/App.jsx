import { useMemo } from "react";
import loginPages from "./pages/LoginPages";

function App() {
  const RandomLogin = useMemo(() => {
    const index = Math.floor(Math.random() * loginPages.length);
    return loginPages[index];
  }, []);

  return <RandomLogin />;
}

export default App;
