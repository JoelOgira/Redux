import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postsSlice';
import { selectAllUsers } from '../Users/userSlice';

const AddPostForm = () => {
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');
  const [ userId, setUserId ] = useState('');

  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);
  const onUserIdChanged = e => setUserId(e.target.value);

  const onSavePostsClicked = () => {
    if (title && content) {
      dispatch(
        postAdded(title, content, userId)
      )
      setTitle('');
      setContent('');
      setUserId('');
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = (users || []).map(user =>
    <option key={user?.id} value={user?.id}>
      {user?.name}
    </option>
  )

  return (
    <div>
      <h2 className='font-bold text-3xl mb-3 text-center underline'>Add a New Post</h2>
      <form onSubmit={e => e.preventDefault()} className='flex flex-col'>
        <label className='font-semibold' htmlFor="postTitle">Post Title </label>
        <input
          type="text"
          id='postTitle'
          name='postTitle'
          className='rounded-lg border p-2 mb-4'
          value={title}
          onChange={onTitleChanged}
        />

        <label className='font-semibold' htmlFor="postAuthor">Post Author </label>
        <select
          id='postAuthor'
          className='rounded-lg border p-2 mb-4'
          value={userId}
          onChange={onUserIdChanged}
        >
          <option  value=""></option>
          {usersOptions}
        </select>

        <label className='font-semibold' htmlFor="postContent">Post Content </label>
        <textarea
          name="postContent"
          id="postContent"
          cols="20"
          rows="5"
          className='border rounded-lg p-2 mb-4'
          value={content}
          onChange={onContentChanged}
        ></textarea>

        <button
          onClick={onSavePostsClicked}
          type='submit'
          className='border rounded-lg px-6 py-3 mx-auto border-black disabled:cursor-not-allowed'
          disabled={!canSave}
        >Save Post</button>
      </form>
    </div>
  )
}

export default AddPostForm;