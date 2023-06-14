import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';

const ReactionButtons = () => {
    const reactionEmoji = {
        thumbsUp: '',
        wow: '',
        heart: '',
        rocket: '',
        coffee: ''
    }

    const dispatch = useDispatch();

    return (
        <div>ReactionButtons</div>
    )
}

export default ReactionButtons;