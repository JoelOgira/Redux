import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const renderedPosts = (posts || []).map(post =>
        <article
            key={post?.id}
            className='border p-5 rounded-lg mb-4'
        >
            <h1 className='font-bold capitalize text-4xl pb-4'>{post?.title}</h1>
            <p className='pb-4'>{post?.content.substring(0, 100)}</p>
            <PostAuthor userId={post?.userId} />
        </article>
    )

    return (
        <div>
            <h1 className='font-bold text-4xl mb-4'>Posts</h1>
            {renderedPosts}
        </div>
    )
}

export default PostsList;