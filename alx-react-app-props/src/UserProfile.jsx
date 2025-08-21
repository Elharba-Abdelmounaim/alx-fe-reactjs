import { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div style={{ border: "1px solid gray", padding: "15px", borderRadius: "8px" }}>
      <h2>Name: {userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
