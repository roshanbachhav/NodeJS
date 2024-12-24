import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [allUsers, setAllUser] = useState([]);
  const authanticated = localStorage.getItem("authToken");

  const showAllData = async () => {
    try {
      const getAllUsersResponse = await axios.get(
        "http://localhost:9000/register"
      );
      const allUser = getAllUsersResponse.data;

      if (Array.isArray(allUser)) {
        setAllUser(allUser);
      } else {
        console.error("Invalid data structure", getAllUsersResponse.data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    showAllData();
  }, []);

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                _id
              </th>
              <th scope="col" className="px-6 py-3">
                email
              </th>
              <th scope="col" className="px-6 py-3">
                username
              </th>
              <th scope="col" className="px-6 py-3">
                Created Date
              </th>
            </tr>
          </thead>
          <tbody>
            {allUsers.length > 0 && authanticated ? (
              allUsers.map((user) => (
                <tr
                  key={user._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user._id}
                  </td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.username}</td>
                  <td className="px-6 py-4">{user.createdDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
