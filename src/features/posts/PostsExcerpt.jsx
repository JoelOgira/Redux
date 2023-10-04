/* eslint-disable react/prop-types */
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

const PostsExcerpt = ({ post }) => {
    return (
        <article className="flex flex-col space-y-3 border rounded-md p-3">
            <h2 className="font-semibold italic text-xl"><Link to={`/post/${post?.id}`}>{post?.title}</Link></h2>
            <p>{post?.body.substring(0, 75)}...</p>
            <div className="flex space-x-1">
                <Link className="underline" to={`/post/${post?.id}`}>View Post</Link>
                <p><PostAuthor userId={post?.userId} /></p>
                <p><TimeAgo timestamp={post?.date} /></p>
            </div>
            <ReactionButtons post={post} />
        </article>
    )
}

export default PostsExcerpt;