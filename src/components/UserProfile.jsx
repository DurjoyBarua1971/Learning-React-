import { useLoaderData, Form } from 'react-router-dom';

function UserProfile() {
  const userData = useLoaderData(); // Access loader data

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <p className="text-gray-700">User ID: {userData.id}</p>
      <p className="text-gray-700">Name: {userData.name}</p>
      <Form method="post" className="mt-4">
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Update Profile
        </button>
      </Form>
    </div>
  );
}

export default UserProfile;