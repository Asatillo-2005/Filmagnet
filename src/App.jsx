import { Routes, Route } from "react-router-dom"
import './App.css'
// import pages
import Home from "./pages/home/home.jsx"
import Movie from "./pages/movie/movie.jsx"
import Tvshow from "./pages/tvshow/tvshow.jsx"
import Web from "./pages/web/web.jsx"
import Primium from "./pages/primium/primium.jsx"
// impor pages
import Movie_inner from "./components/movie_inner/movie_inner.jsx"
import Header from "./components/header/header.jsx"
import Admin from "./components/admin/admin.jsx"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tvshow" element={<Tvshow />} />
        <Route path="/web" element={<Web />} />
        <Route path="/primium" element={<Primium />} />
        <Route path="/movie_inner/:movieId" element={<Movie_inner />} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </>
  )
}

export default App
