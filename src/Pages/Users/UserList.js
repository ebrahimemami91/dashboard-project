import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../datas";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

import "./UserList.css";

export default function UserList() {
  const [userData, setUserDatas] = useState(userRows);

  const userDelete = (userID) => {
    setUserDatas(userData.filter((user) => user.id != userID));
  };

  const columns = [
    {
      field: "id",
      hedearName: "ID",
      width: 90,
    },
    {
      field: "user",
      hedearName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="link">
            <div className="userListUser">
              <img src={params.row.avatar} className="userListImg" />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      hedearName: "Email",
      width: 200,
    },
    {
      field: "status",
      hedearName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      hedearName: "Transactions",
      width: 160,
    },
    {
      field: "action",
      hedearName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteIcon
              className="userListDelete"
              onClick={() => userDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={userData}
        columns={columns}
        disableSelectionOnClick
        pageSize={3}
      />
    </div>
  );
}
