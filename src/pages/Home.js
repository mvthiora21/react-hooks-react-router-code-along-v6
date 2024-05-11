import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import UserCard from "../components/UserCard";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data from an API or server
    fetch("http://localhost:4000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const userList = users.map((user) => (
    <Link key={user.id} to={`/profile/${user.id}`}>
      <UserCard user={user} />
    </Link>
  ));

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home!</h1>
        {userList}
      </main>
    </>
  );
}

export default Home;