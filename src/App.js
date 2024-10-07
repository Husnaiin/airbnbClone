import "./App.css";
import { useState } from "react";
import Filter from "./components/Filter";
import Header from "./components/Header";
function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className="App">
      <Header />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
    </div>
  );
}

export default App;
