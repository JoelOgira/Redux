import { useSelector } from "react-redux";
import { selectPostIds } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";
import { useGetPostsQuery } from "./postsSlice";

const PostsList = () => {
    const { isLoading, isSuccess, isError, error } = useGetPostsQuery();

    const orderedPostIds = useSelector(selectPostIds);

    return (
        <section className="px-5 flex flex-col space-y-3 justify-start items-start py-8 container mx-auto text-white lg:w-4/6">
            <div className="w-full grid grid-cols items-center gap-2.5 lg:grid-cols-2 lg:gap-x-5">
                {(isLoading) && <p>Loading...</p>}

                {!(isLoading) && (isError) && <p>{error}</p>}

                {!(isLoading) && !(isError) && (isSuccess) && (orderedPostIds || []).map(postId => (
                    <PostsExcerpt key={postId} postId={postId} />
                ))}
            </div>
        </section>
    )
}

export default PostsList;