import { useEffect, useState } from "react";
import getAllUsers from "../../api/getAllUsers";
import Header from "../../components/header/Header";
import Loading from "../../components/Loading";
import UserComponent from "../../components/UserComponent";

const UserPage = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchResponse = async () => {
      const response = await getAllUsers();
      setUsers(response);
    };

    fetchResponse();
  }, []);

  const UserList = () => {
    return (
      <ul className="list-group">
        {users.map((user) => <UserComponent user={user} />)}
      </ul>
    );
  };

  return (
    <div>
      <Header />
      <div style={{ margin: "auto", width: "500px", marginTop: "30px"}}>
        {users == null ? <Loading /> : <UserList />}
      </div>
    </div>
  );
};

export default UserPage;
