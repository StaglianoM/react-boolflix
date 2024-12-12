import { useState } from "react";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import "./styles/App.css";



const App = () => {
  const [query, setQuery] = useState("");

  return (
    <div>

      <Main query={query} setQuery={setQuery} />
      <Footer />
    </div>
  );
};

export default App;
