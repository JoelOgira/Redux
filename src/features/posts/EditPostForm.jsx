import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePost, selectPostById } from '../posts/postsSlice';
import { selectAllUsers } from "../users/usersSlice";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { postId } = useParams();
    const users = useSelector(selectAllUsers);
    
    const post = useSelector((state) => selectPostById(state, Number(postId)));

    const [ title, setTitle ] = useState(post?.title);
    const [ userId, setUserId ] = useState(post?.userId);
    const [ body, setBody ] = useState(post?.body);
    const [ addRequestStatus, setAddRequestStatus ] = useState('idle');

    const canSave = [ title, userId, body ].every(Boolean) && addRequestStatus === 'idle';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (canSave) {
            try {
                setAddRequestStatus('pending');
                dispatch(updatePost({ id: post?.id, title, userId, body, reactions: post?.reactions })).unwrap();
                setTitle('');
                setUserId('');
                setBody('');
                navigate(`/post/${postId}`);
            } catch (err) {
                console.error('Failed to edit post', err);
            } finally {
                setAddRequestStatus('idle')
            }
        }
    }

    const usersOptions = (users || []).map(user => (
        <option key={user?.id} value={user?.id}>
            {user?.name}
        </option>
    ))

    return (
        <section className="px-5 flex flex-col space-y-3 justify-start items-start py-8 container mx-auto text-white lg:w-4/6">
            <div className="flex flex-col space-y-3 w-full">
                <h2 className="text-chocolate italic text-2xl font-semibold">Edit Post</h2>
                {!post ?
                    <>
                        <p>Post not Found!</p>
                        <Link to="/">Go back to Homepage</Link>
                    </>
                    :
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-3">

                        <div className="flex flex-col space-y-1">
                            <label htmlFor="postTitle">Post Title</label>
                            <input
                                type="text"
                                placeholder="Add Title"
                                required
                                className="p-2 rounded focus:outline-none text-black"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label htmlFor="postAuthor">Author</label>
                            <select
                                defaultValue={userId}
                                onChange={(e) => setUserId(Number(e.target.value))}
                                className="text-black rounded p-2 focus-within:outline-none"
                            >
                                <option value=""></option>
                                {usersOptions}
                            </select>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label htmlFor="postBody">Post Body</label>
                            <textarea
                                cols="30"
                                rows="6"
                                placeholder="Add Content"
                                required
                                className="p-2 focus:outline-none rounded text-black"
                                value={body}
                                onChange={e => setBody(e.target.value)}
                            />
                        </div>
                        <button disabled={!canSave} className="grid content-center gap-x-5 py-2 px-6 rounded bg-slate-800 mr-auto text-white hover:bg-slate-600">
                            Edit Post
                        </button>
                    </form>
                }
            </div>
        </section>
    )
}

export default EditPostForm;