import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const AddStudent = () => {
  const [formData, setformData] = useState({
    rollno: "",
    email: "",
    password: "",
    grade: "",
  });

  const HandleOnChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const HandeSubmit = async (e) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3045/student/create',
        formData
      
      );

      console.log(response.data);
      setformData({
        rollno: "",
        email: "",
        password: "",
        grade: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center" style={{ width:'50rem' }}>
        <div className="col-md-6">
          <h2>Add Student</h2>
          <form onSubmit={HandeSubmit}>
            <div className="mb-3">
              <label htmlFor="rollno" className="form-label">
                Roll No
              </label>
              <input
                type="text"
                className="form-control"
                id="rollno"
                name="rollno"
                value={formData.rollno}
                onChange={HandleOnChange}

              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={HandleOnChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={HandleOnChange}

              />
            </div>
            <div className="mb-3">
              <label htmlFor="grade" className="form-label">
                Grade
              </label>
              <input
                type="text"
                className="form-control"
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={HandleOnChange}

              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
