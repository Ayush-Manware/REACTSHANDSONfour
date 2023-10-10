import React from "react";

const Student = () => {
  return (
    <>
      <div className="studentContainer">
        <div className="flexOne">
          <h2 className="studentDetail">Student Details</h2>
          <button className="newStudentBtn">+ New Student</button>
        </div>
        <table className="table">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Student;
