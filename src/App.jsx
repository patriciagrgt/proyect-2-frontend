
import './App.css'
import { Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </>
  )
}

export default App
