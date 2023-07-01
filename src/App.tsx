import { Route, Routes } from "react-router-dom";
import { Home, Character, CharacterList, Book, BookList, HousesList, House } from './layouts'
import "./App.css";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/houses" element={<HousesList />} />
        <Route path="/houses/:id" element={<House />} />
      </Routes>
    </>
  );
}

export default App;
