import { useSelector } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
    const orderedPostIds = useSelector(selectPostIds);
    const postsStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    return (
        <section className="px-5 flex flex-col space-y-3 justify-start items-start py-8 container mx-auto text-white lg:w-4/6">
            <div className="w-full grid grid-cols items-center gap-2.5 lg:grid-cols-2 lg:gap-x-5">
                {(postsStatus === 'loading') && <p>Loading...</p>}

                {!(postsStatus === 'loading') && (postsStatus === 'failed') && <p>{error}</p>}

                {!(postsStatus === 'loading') && !(postsStatus === 'failed') && (postsStatus === 'succeeded') && (orderedPostIds || []).map(postId => (
                    <PostsExcerpt key={postId} postId={postId} />
                ))}
            </div>
        </section>
    )
}

export default PostsList;