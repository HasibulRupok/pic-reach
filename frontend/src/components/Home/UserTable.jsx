import { Link } from "react-router-dom";
import { IoMdPersonAdd } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const UserTable = ({ users }) => {
  return (
    <table className="table-fixed w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Name</th>
          <th className="border border-slate-600 rounded-md">Address</th>
          <th className="border border-slate-600 rounded-md">Phone</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Image
          </th>
          <th className="border border-slate-600 rounded-md">Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return (
            <tr key={user._id} className="h-8">
              <td className="border border-slate-700 rounded-md text-center">
                {index + 1}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {user.name}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {user.address}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {user.phone}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                <img src={user.image} className="userDP" alt="user image" />
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/users/edit/${user._id}`}>
                    <FaUserEdit className="text-2xl text-cyan-400" />
                  </Link>
                  <Link to={`/users/delete/${user._id}`}>
                    <MdDeleteForever className="text-2xl text-red-500" />
                  </Link>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserTable;
