import { useSelector } from "react-redux";
import { selectAllUsers } from "./usersSlice";
import { Link } from "react-router-dom";

const UsersList = () => {
    const users = useSelector(selectAllUsers);

    return (
        <section className="px-5 flex flex-col space-y-3 justify-start items-start py-8 container mx-auto text-white lg:w-4/6">
            <div className="w-full gap-5 grid grid-cols-2">
                {(users || []).map(user => (
                    <article key={user?.id} className="flex flex-col space-y-3 border rounded-md p-3">
                        <h2 className="font-semibold italic text-xl"><Link to={`/users/${user?.id}`}>{user?.name}</Link></h2>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default UsersList;