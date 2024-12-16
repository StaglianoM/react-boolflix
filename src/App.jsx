import { useState } from "react";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import "./styles/App.css";



const App = () => {
  const [query, setQuery] = useState("");

  return (
    <main>
      <div>
        <Main query={query} setQuery={setQuery} />
        <Footer />
      </div>
    </main>
  );
};

export default App;
