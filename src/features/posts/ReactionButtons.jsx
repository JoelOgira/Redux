/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([ name, emoji ]) => {
        return (
            <button
                key={name}
                type="button"
                className=""
                onClick={() => 
                    dispatch(reactionAdded({postId: post.id, reaction: name}))
                }
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return (
        <div className="flex items-center space-x-2">
            {reactionButtons}
        </div>
    )
}

export default ReactionButtons;