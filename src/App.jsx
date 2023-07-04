import { Routes, Route } from "react-router-dom";
import Windfall from "./Windfall/Windfall";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import CounterDisplay from "./Counter/CounterDisplay";
import PostsDisplay from "./posts/PostsDisplay";

const App = () => {
  return (
    <div className="min-h-[100dvh] scroll-smooth">
      <Header />
      <Routes>
        <Route path="/" element={<Windfall />} />
        <Route path="/posts" element={<PostsDisplay />} />
        <Route path="/users" element  />
        <Route path="/counter" element={<CounterDisplay />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App; 