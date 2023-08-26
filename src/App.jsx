import { Routes, Route } from "react-router-dom";
import Windfall from "./Windfall/Windfall";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import CounterDisplay from "./Counter/CounterDisplay";
import PostsDisplay from "./posts/PostsDisplay";
import TodoList from "./Todos/TodoList";
import SinglePostPage from "./posts/SinglePostPage";
import AddPostForm from "./posts/AddPostForm";

const App = () => {
  return (
    <div className="App min-h-[100dvh] scroll-smooth bg-gray-300">
      <Header />
        <Routes>
          <Route path="/" element={<Windfall />} />
          <Route path="/posts" element={<PostsDisplay />} />
          <Route path="/new_post" element={<AddPostForm />} />
          <Route path="/post:id" element={<SinglePostPage />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/counter" element={<CounterDisplay />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App; 