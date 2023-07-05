import React, { Component } from "react";
import axios from "axios";

class ShowUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:8000/api/get-user");
      this.setState({ users: response.data });
    } catch (error) {
      console.error("Error retrieving users:", error);
    }
  }

//   performAction = async (userId) => {
//     if (window.confirm("Are you sure?")) {
//         try {
//             const response = await axios.put(`http://localhost:8000/api/users_update-statue/${userId}`);
//             alert("Chỉnh sửa thành công");
//             const response1 = await axios.get("http://localhost:8000/api/get-user");
//             this.setState({ users: response1.data });
                
            
//         }catch (error) {
//             alert("bị lỗi")
//             console.error("Error updating user status:", error);
//         }
//     }
// };
performAction = async (userId) => {
  if (window.confirm("Are you sure?")) {
      try {
          const response = await axios.get(`http://localhost:8000/api/users_update-statue/${userId}`);
          if (response.data.message) {
              this.setState((prevState) => {
                  const updatedUsers = prevState.users.map((user) => {
                      if (user.user_id === userId) {
                          return { ...user, isActive: !user.isActive };
                      }
                      return user;
                  });
                  return { users: updatedUsers };
              });
          }
      } catch (error) {
          console.error("Error updating user status:", error);
      }
  }
};


  render() {
    const columns = [
      {
        name: "ID",
        selector: "id",
        sortable: true,
      },
      {
        name: "Name",
        selector: "name",
        sortable: true,
      },
      {
        name: "Email",
        selector: "email",
        sortable: true,
      },
      {
        name: "Role",
        selector: "role",
        sortable: true,
      },
    ];

    return (
      <div className="show-users">
        <table className="users-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.name}>{column.name}</th>
              ))}
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.user_id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role_id}</td>
                <td>
                  {user.isActive==0 ? (
                    <button
                      className="inactive-button"
                      onClick={() => this.performAction(user.user_id)}
                    >
                      Inactive
                    </button>
                  ) : (
                    <button
                      className="active-button"
                      onClick={() => this.performAction(user.user_id)}
                    >
                      active
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShowUsers;
