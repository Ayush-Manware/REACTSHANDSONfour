import React from "react";
import { Link } from "react-router-dom";

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
          <tr>
            <td>Ayush</td>
            <td>21</td>
            <td>MERN</td>
            <td>EA25</td>
            <td><Link>Edit</Link></td>
          </tr>
          <tr>
            <td>Piyush</td>
            <td>21</td>
            <td>MEAN</td>
            <td>EA25</td>
            <td><Link>Edit</Link></td>
          </tr>
          <tr>
            <td>Suraj</td>
            <td>23</td>
            <td>MEAN</td>
            <td>EA23</td>
            <td><Link>Edit</Link></td>
          </tr>
          <tr>
            <td>Prateek</td>
            <td>24</td>
            <td>MERN</td>
            <td>EA25</td>
            <td><Link>Edit</Link></td>
          </tr>
          <tr>
            <td>Aman</td>
            <td>19</td>
            <td>MERN</td>
            <td>EA25</td>
            <td><Link>Edit</Link></td>
          </tr>
          <tr>
            <td>Krishna</td>
            <td>17</td>
            <td>MERN</td>
            <td>EA25</td>
            <td><Link>Edit</Link></td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Student;
