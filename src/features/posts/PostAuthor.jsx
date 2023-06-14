/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../Users/userSlice';

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);

    const author = (users || []).find(user => user?.id === parseInt(userId));

    return <span>by {author ? author?.name : "Unknown author"}</span>
}

export default PostAuthor;