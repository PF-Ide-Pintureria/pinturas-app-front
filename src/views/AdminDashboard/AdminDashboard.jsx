import React from "react";
import CreateForm from "../../components/CreateForm/CreateForm";
import UpdateForm from "../../components/UpdateForm/UpdateForm";
import "../AdminDashboard/AdminDashboard.css";
import CreateButton from "../../components/CreateButton/CreateButton";

const AdmindDashboard = () => {
  return (
    <div>
      <div className="background">
        {" "}
        <div className="flex self-center justify-around">
          <div className="form">
            {/* <CreateForm /> */}
            <CreateButton/>
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
