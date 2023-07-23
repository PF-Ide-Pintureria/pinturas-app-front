import React from "react";
import CreateForm from "../../components/CreateForm/CreateForm";
import UpdateForm from "../../components/UpdateForm/UpdateForm";
import "../AdminDashboard/AdminDashboard.css";

const AdmindDashboard = () => {
  return (
    <div>
      <div className="background">
        {" "}
        <div className="flex self-center justify-around">
          <div className="form">
            <CreateForm />
          </div>
          {/* <div className="form">
            <UpdateForm />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdmindDashboard;
