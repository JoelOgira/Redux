/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsExcerpt = ({ post }) => {
    return (
        <article
            className="flex flex-col space-y-3 bg-white border rounded-md p-4 shadow-lg"
        >
            <Link to={`/post/${post?.id}`} className="text-2xl font-semibold md:text-3xl">{post?.title}</Link>
            <p>{post?.body.substring(0, 75)}</p>
            <p>
                <PostAuthor userId={post?.userId} />
                <TimeAgo timestamp={post?.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}

export default PostsExcerpt;