import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";

function App() {
  // 이미지가 제대로 나타나지 않을 경우 아래와 같이 입력
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";
  //

  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <img src={process.env.PUBLIC_URL + `assets/emotion1.png`} />
        <img src={process.env.PUBLIC_URL + `assets/emotion2.png`} />
        <img src={process.env.PUBLIC_URL + `assets/emotion3.png`} />
        <img src={process.env.PUBLIC_URL + `assets/emotion4.png`} />
        <img src={process.env.PUBLIC_URL + `assets/emotion5.png`} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
