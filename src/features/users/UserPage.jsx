import { useSelector } from "react-redux";
import { selectUserById } from "./usersSlice";
import { selectPostsByUser } from "../posts/postsSlice";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
    const { userId } = useParams();
    const user = useSelector(state => selectUserById(state, Number(userId)));

    const postsForUser = useSelector(state => selectPostsByUser(state, Number(userId)));

    const postTitles = postsForUser.map(post => (
        <li key={post?.id}>
            <Link to={`/post/${post?.id}`}>{post?.title}</Link>
        </li>
    ))

    return (
        <section className="px-5 flex flex-col space-y-3 justify-start items-start py-8 container mx-auto text-white lg:w-4/6">
            <h2 className="font-semibold italic text-xl">{user?.name}</h2>
            <ol className="list-decimal">{postTitles}</ol>
        </section>
    )
}

export default UserPage;