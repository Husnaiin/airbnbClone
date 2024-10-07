import "./App.css";
import { useState } from "react";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Cards  from "./components/Cards";
import Footer from "./components/Footer";
import { list, list2 } from "./assets/cards-list";
function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className="App">
      <Header />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
      <Footer/>
    </div>
  );
}

export default App;
