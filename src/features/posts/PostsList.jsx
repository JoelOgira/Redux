import { useSelector } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
    const posts = useSelector(selectAllPosts);
    const postsStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    const uniquePosts = Array.from(new Set(posts.map(post => post.id))).map(id => posts.find(post => post.id === id));
    const orderedPosts = uniquePosts.slice().sort((a, b) => b.date.localeCompare(a.date));

    return (
        <section className="px-5 flex flex-col space-y-3 justify-start items-start py-8 container mx-auto text-white lg:w-4/6">
            <div className="w-full grid grid-cols items-center gap-2.5 lg:grid-cols-2 lg:gap-x-5">
                {(postsStatus === 'loading') && <p>Loading...</p>}

                {!(postsStatus === 'loading') && (postsStatus === 'failed') && <p>{error}</p>}

                {!(postsStatus === 'loading') && !(postsStatus === 'failed') && (postsStatus === 'succeeded') && (orderedPosts || []).map((post) => (
                    <PostsExcerpt key={post.id} post={post} />
                ))}
            </div>
        </section>
    )
}

export default PostsList;