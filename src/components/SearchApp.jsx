import React, { useState, useEffect } from "react";

const SearchApp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`,
          {
            signal: controller.signal,
          }
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error fetching users:", error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();

    return () => {
      controller.abort();
      console.log("Fetch aborted");
    };
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="max-w-lg mx-auto p-6 bg-gray-800 text-white rounded shadow-lg">
        <h1 className="mb-4 font-bold text-center text-2xl">User Search</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a user..."
          className="w-full border border-gray-600 rounded p-2 mb-4 text-center bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {loading && <p className="text-center text-blue-400">Loading...</p>}
        {!loading && filteredUsers.length === 0 && (
          <p className="text-center text-red-400">No users found</p>
        )}
        {!loading && filteredUsers.length > 0 && (
          <ul className="list-disc list-inside text-left">
            {filteredUsers.map((user) => (
              <li key={user.id} className="mb-2 text-gray-100">
                {user.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchApp;