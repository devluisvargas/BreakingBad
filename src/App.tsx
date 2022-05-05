import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./components/MainPage";

function App() {
  return (
    <div className="container my-3">
      <h1>Breaking bad</h1>
      <hr />
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
