import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPostById } from './postsSlice';
import { useParams, Link, useNavigate } from 'react-router-dom';

import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import DeletePostModal from './DeletePostModal';

import { useDeletePostMutation } from './postsSlice';

const SinglePost = () => {
    const { postId } = useParams();
    const post = useSelector((state) => selectPostById(state, Number(postId)));
    const navigate = useNavigate();

    const [deletePost] = useDeletePostMutation();

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = async () => {
        try {
            await deletePost({ id: post.id }).unwrap();
            navigate('/');
        } catch (err) {
            console.log('Failed to delete the post', err)
        } finally {
            setIsModalOpen(false);
        }
    };

    return (
        <section className="px-5 flex flex-col space-y-3 py-8 container mx-auto text-white lg:w-4/6">
            <h1 className="text-chocolate text-3xl font-bold mb-4 underline">Post</h1>
            {post ? (
                <div className="w-full flex flex-col space-y-5">
                    <article className="flex flex-col space-y-3 border rounded-md p-3">
                        <h2 className="font-semibold italic text-2xl">{post?.title}</h2>
                        <p>{post?.body}</p>
                        <div className="flex">
                            <p>
                                <PostAuthor userId={post?.userId} />
                            </p>
                            <p>
                                <TimeAgo timestamp={post?.date} />
                            </p>
                        </div>
                        <ReactionButtons post={post} />
                    </article>

                    <div className="flex justify-between">
                        <button
                            className="grid content-center gap-x-5 py-2 px-6 rounded bg-slate-800 text-white hover:bg-green-600"
                        >
                            <Link to={`/post/edit/${postId}`}>Edit Post</Link>
                        </button>
                        <button
                            className="grid content-center gap-x-5 py-2 px-6 rounded bg-slate-800 text-white hover:bg-red-600"
                            onClick={openModal} // Open the modal when clicked
                        >
                            Delete Post
                        </button>
                    </div>
                </div>

            ) : (
                <>
                    <p>Post not Found!</p>
                    <Link to="/">Go back to Homepage</Link>
                </>
            )}

            {isModalOpen && (
                <DeletePostModal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    onDelete={handleDelete}
                />
            )}
        </section>
    );
};

export default SinglePost;
