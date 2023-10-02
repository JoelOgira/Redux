import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from '../posts/postsSlice';
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const users = useSelector(selectAllUsers);

    const [ title, setTitle ] = useState('');
    const [ userId, setUserId ] = useState('');
    const [ body, setBody ] = useState('');
    const [ addRequestStatus, setAddRequestStatus ] = useState('idle');

    const dispatch = useDispatch();

    const canSave = [title, userId, body].every(Boolean) && addRequestStatus === 'idle';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (canSave) {
            try {
                setAddRequestStatus('pending');
                dispatch(addNewPost({title, userId, body})).unwrap();
                setTitle('');
                setUserId('');
                setBody('');
            } catch (err) {
                console.error('Failed to save post', err);
            } finally {
                setAddRequestStatus('idle')
            }
        }
    }

    const usersOptions = (users || []).map((user) => (
        <option key={user?.id} value={user?.id}>
            {user?.name}
        </option>
    ));

    return (
        <section className="flex flex-col space-y-3 w-full">
            <h2 className="text-chocolate italic text-2xl font-semibold">Add New Post</h2>
            <form onClick={handleSubmit} className="flex flex-col space-y-3">

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
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
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
                    Save Post
                </button>
            </form>
        </section>
    )
}

export default AddPostForm;