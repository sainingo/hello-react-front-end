import { Routes, Route } from "react-router-dom";
import Greetings from "./components/Greetings";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
     <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </div>
  );
}

export default App;
