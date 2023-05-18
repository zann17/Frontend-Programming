import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Create from "./pages/Movie/Create";
import Popular from "./pages/Movie/Popular";
import NowPlaying from "./pages/Movie/NowPlaying";
import TopRated from "./pages/Movie/TopRated";
import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/create" element={<Create />}></Route>
        <Route path="/movie/popular" element={<Popular />}></Route>
        <Route path="/movie/now" element={<NowPlaying />}></Route>
        <Route path="/movie/top" element={<TopRated />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;