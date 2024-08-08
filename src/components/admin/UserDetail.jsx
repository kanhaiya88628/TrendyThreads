import { useContext } from "react";
import myContext from "../../context/myContext";

const UserDetail = () => {
    const context = useContext(myContext);
    const { getAllUser } = context;

    return (
        <div>
            <div className="py-5 flex justify-between items-center">
                <h1 className="text-xl text-pink-300 font-bold">All Users</h1>
            </div>

            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
                    <thead>
                        <tr>
                            <th
                                scope="col"
                                className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold"
                            >
                                S.No.
                            </th>
                            <th
                                scope="col"
                                className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold"
                            >
                                Name
                            </th>
                            <th
                                scope="col"
                                className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold"
                            >
                                Email
                            </th>
                            <th
                                scope="col"
                                className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold"
                            >
                                UID
                            </th>
                            <th
                                scope="col"
                                className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold"
                            >
                                Role
                            </th>
                            <th
                                scope="col"
                                className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold"
                            >
                                Date
                            </th>
                            <th
                                scope="col"
                                className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold"
                            >
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {getAllUser.map((user, index) => (
                            <tr key={user.uid} className="text-pink-300">
                                <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                    {index + 1}
                                </td>
                                <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                    {user.name}
                                </td>
                                <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                    {user.email}
                                </td>
                                <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                    {user.uid}
                                </td>
                                <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                    {user.role}
                                </td>
                                <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                    {user.date}
                                </td>
                                <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                                    <span className="text-green-500 cursor-pointer">Edit</span>
                                    <span className="text-red-500 cursor-pointer ml-4">Delete</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserDetail;
