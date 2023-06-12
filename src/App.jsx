import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

const App = () => {
  return (
    <div className=" min-h-[100dvh]">
      <div className="container mx-auto pt-10 px-5 md:w-1/2">
        <div className="flex flex-col">
          <AddPostForm />
          <PostsList />
        </div>
      </div>
    </div>
  )
}

export default App;