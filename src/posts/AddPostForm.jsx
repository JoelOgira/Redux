import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const postRef = useRef();

    const users = useSelector(selectAllUsers);
    const dispatch = useDispatch();

    const [ title, setTitle ] = useState('');
    const [ userId, setUserId ] = useState('');
    const [ content, setContent ] = useState('');

    useEffect(() => {
        postRef.current.focus();
    }, []);

    const userOptions = (users || []).map(user =>
        <option key={user?.id} value={user?.id}>
            {user?.name}
        </option>
    )

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(postAdded(title, userId, content));
        setTitle('');
        setUserId('');
        setContent('');        
    }

    return (
        <div>
            <h2 className="font-bold text-3xl text-[#d2691e] mb-3">Add a New Post</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mb-2 ">
                <div className="flex flex-col space-y-1">
                    <label className="text-xl font-semibold" htmlFor="postTitle">Post Title</label>
                    <input
                        ref={postRef}
                        type="text"
                        required
                        className="w-full p-2 border border-[#d2691e] rounded-md focus:outline-transparent focus:border-none"
                        placeholder="Enter Post Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="text-xl font-semibold" htmlFor="userId">User ID</label>
                    <select
                        value={userId}
                        onChange={e => setUserId(e.target.value)}
                        className="w-full p-2 border border-[#d2691e] rounded-md focus:outline-transparent focus:border-none"
                    >
                        <option value=""></option>
                        {userOptions}
                    </select>
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="text-xl font-semibold" htmlFor="content">Content</label>
                    <textarea
                        required
                        cols="60" rows="5"
                        className="border border-[#d2691e] rounded-md p-2 focus:outline-transparent focus:border-none"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    ></textarea>
                </div>

                <button
                    disabled={!canSave}
                    className="bg-[#212529] py-3 w-full text-white font-bold text-xl rounded-md" >
                    Add Post
                </button>
            </form>
        </div>
    )
}

export default AddPostForm;