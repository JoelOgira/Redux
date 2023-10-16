import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { useNavigate } from "react-router-dom";
import { useAddNewPostMutation } from "../posts/postsSlice";

const AddPostForm = () => {
    const users = useSelector(selectAllUsers);
    const navigate = useNavigate();

    const [ title, setTitle ] = useState('');
    const [ userId, setUserId ] = useState('');
    const [ body, setBody ] = useState('');
    
    const [addNewPost, {isLoading}] = useAddNewPostMutation();

    const canSave = [ title, userId, body ].every(Boolean) && !isLoading;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (canSave) {
            try {
                await addNewPost({title, body, userId}).unwrap();
                setTitle('');
                setUserId('');
                setBody('');
                navigate('/');
            } catch (err) {
                console.error('Failed to save post', err);
            } 
        }
    }

    const usersOptions = (users || []).map((user) => (
        <option key={user?.id} value={user?.id}>
            {user?.name}
        </option>
    ));

    return (
        <section className="px-5 flex flex-col space-y-3 justify-start items-start py-8 container mx-auto text-white lg:w-4/6">
            <div className="flex flex-col space-y-3 w-full">
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
            </div>
        </section>
    )
}

export default AddPostForm;