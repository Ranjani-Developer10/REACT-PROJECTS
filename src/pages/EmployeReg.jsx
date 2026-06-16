import { useState } from "react";

function EmployeReg() {
  const [employeeName, setEmployeeName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [employees, setEmployees] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      employeeName,
      department,
      salary,
    };

    setEmployees([...employees, newEmployee]);

    setEmployeeName("");
    setDepartment("");
    setSalary("");
  };

  return (
    <>
      <h1>Employee Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Employee Name" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} />
        <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)}/>
        <input type="number" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)}/>
        <button type="submit">Add Employee</button>
      </form>

      <h2>Total Employees: {employees.length}</h2>

      {employees.map((emp, index) => (
        <div key={index}>
          <p>Name: {emp.employeeName}</p>
          <p>Department: {emp.department}</p>
          <p>Salary: ₹{emp.salary}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default EmployeReg;