/* eslint-disable react/prop-types */
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsExcerpt = ({ post }) => {
    return (
        <article className="flex flex-col space-y-3 border rounded-md p-3">
            <h2 className="font-semibold italic">{post?.title}</h2>
            <p>{post?.body.substring(0, 100)}</p>
            <div className="flex">
                <p><PostAuthor userId={post?.userId} /></p>
                <p><TimeAgo timestamp={post?.date} /></p>
            </div>
            <ReactionButtons post={post} />
        </article>
    )
}

export default PostsExcerpt;