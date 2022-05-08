import React from "react";

function Navbar() {
  return (
    <nav
      style={{ width: "90%" }}
      className="navbar navbar-light bg-light mx-auto "
    >
      <span
        className="navbar-brand mb-0 h1 "
        style={{
          marginLeft: "43%",
          fontSize: "38px",
          backgroundColor: "#F0F8FF",
        }}
      >
        <b>Topic Module</b>
      </span>
      <span className="navbar-brand">
        <b>
          {/* <i class="bi bi-person"></i> User{" "} */}
        </b>
      </span>
    </nav>
  );
}

export default Navbar;
