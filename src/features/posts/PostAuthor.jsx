/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { Link } from "react-router-dom";

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);

    const author = (users || []).find((user) => user?.id === userId)

    return <span>by {author
        ? <Link to={`/users/${userId}`}>{author?.name}</Link>
        : "Unknown Author"}</span>
}

export default PostAuthor;