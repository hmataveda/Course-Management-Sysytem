import React from "react";

function CourseDropdown(){
    return (
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Select Course
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">React</a></li>
    <li><a class="dropdown-item" href="#">Angular</a></li>
    <li><a class="dropdown-item" href="#">Java</a></li>
  </ul>
</div>
    )
}

export default CourseDropdown