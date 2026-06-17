import { useState, useEffect } from "react";

function UserData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to Fetch Data");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error Fetching Data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <h1>User Details</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h3>Name: {user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Company: {user.company.name}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default UserData;