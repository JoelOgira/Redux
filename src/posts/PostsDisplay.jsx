import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllPosts } from "./postsSlice";
import AddPostForm from "./AddPostForm";  
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsDisplay = () => {
    const posts = useSelector(selectAllPosts);

    const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date));

    const renderedPosts = (orderedPosts || []).map(post =>
        <article
            key={post?.id}
            className="flex flex-col space-y-3 bg-white border rounded-md p-4 shadow-lg"
        >
            <Link className="text-2xl font-semibold md:text-3xl">{post?.title}</Link>
            <p>{post?.content.substring(0, 100)}</p>
            <p>
                <PostAuthor userId={post?.userId} />
                <TimeAgo timestamp={post?.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )

    return (
        <div className="min-h-[100dvh] py-8 px-6 w-full bg-gray-300 md:px-8">
            <div className="flex flex-col space-y-6 justify-start container mx-auto lg:w-4/6">
                <AddPostForm />
                <hr />
                <h1 className="font-bold text-4xl text-[#d2691e]">Posts</h1>
                {renderedPosts}
            </div>
        </div>
    )
}

export default PostsDisplay;