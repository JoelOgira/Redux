import { Routes, Route, Navigate } from "react-router-dom";
import Hesabu from "./reducer/Hesabu";
import CounterDisplay from "./features/counter/CounterDisplay";
import PostsList from "./features/posts/PostsList";
import SinglePost from "./features/posts/SinglePost";
import Layout from "./components/Layout";
import AddPostForm from "./features/posts/AddPostForm";
import EditPostForm from "./features/posts/EditPostForm";
import UsersList from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />
        <Route path="/hesabu" element={<Hesabu />} />
        <Route path="/counter" element={<CounterDisplay />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePost />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path="users">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />

      </Route>
    </Routes >
  )
}

export default App; 