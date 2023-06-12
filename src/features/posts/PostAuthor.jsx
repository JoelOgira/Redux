/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../Users/userSlice';

const PostAuthor = ({userId}) => {
    const users = useSelector(selectAllUsers);

    return (
        <div>
            {userId}
            {
                (users || []).map(user => 
                    <ul key={user?.id}>
                        <li>{user?.id}. {user?.name}</li>
                    </ul>
                )
            }
        </div>
    )
}

export default PostAuthor;