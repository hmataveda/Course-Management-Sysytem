import React, { Component } from "react";
import AdminNavBar from "../../components/Pages/AdminNavBar.js";

export default class AdminHomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <AdminNavBar />
        <div className="container">
          <div className=" mt-4 bg-light p-4 ">
            <h3>Admin Actions List</h3>
            <ul>
              <li>Admin can add new quiz</li>
              <li>Admin can update or delete quiz</li>
              <li>Admin can take quiz tests</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
