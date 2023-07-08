import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import { useParams } from "react-router-dom";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const SinglePostPage = () => {
    const { postId } = useParams();

    const post = useSelector(state => selectPostById(state, Number(postId)));

    return (
        <div className="w-full py-8 px-6 md:px-8">
            <div className="flex justify-center items-center container mx-auto lg:w-4/6">
                <article className="w-full flex flex-col space-y-3 bg-white border rounded-md p-4 shadow-lg">
                    {post ?
                        <>
                            <h2 className="text-2xl font-semibold md:text-3xl">{post?.title}</h2>
                            <p>{post?.body}</p>
                            <p>
                                <PostAuthor userId={post?.userId} />
                                <TimeAgo timestamp={post?.date} />
                            </p>
                            <ReactionButtons post={post} />
                        </>
                        : <h2>Post Not Found!</h2>
                    }
                </article>
            </div>
        </div>
    )
}

export default SinglePostPage;