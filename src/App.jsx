import Counter from "./features/counter/Counter";
import Counter2 from "./features/counter2/Counter2";
import PostsList from "./features/posts/PostsList";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className=" min-h-[100dvh]">
      <div className="container mx-auto pt-10 px-5 md:w-1/2">
        <div className="flex flex-col">
          <Routes>
            <Route path="/" element={<PostsList />} />
            <Route path="/count" element={<Counter />} />
            <Route path="/count2" element={<Counter2 />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App; 