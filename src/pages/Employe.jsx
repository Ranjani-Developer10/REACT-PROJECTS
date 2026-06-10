import { useState } from "react";

function Employe() {
  const [employeeName, setEmployeeName] = useState("");
  const [salary, setSalary] = useState("");
  const [bonus, setBonus] = useState(0);
  const [finalSalary, setFinalSalary] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    let bonusAmount = 0;

    if (salary > 30000) {
      bonusAmount = 5000;
    } else if (salary > 20000) {
      bonusAmount = 3000;
    } else {
      bonusAmount = 1000;
    }

    setBonus(bonusAmount);
    setFinalSalary(Number(salary) + bonusAmount);
  };

  return (
    <>
      <h1>Employee Salary Bonus</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Employee Name" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)}/>

        <input type="number" placeholder="Salary"  value={salary} onChange={(e) => setSalary(e.target.value)}/>

        <button type="submit">Calculate</button>
      </form>

      <h3>Employee Name: {employeeName}</h3>
      <h3>Bonus: ₹{bonus}</h3>
      <h3>Final Salary: ₹{finalSalary}</h3>
    </>
  );
}

export default Employe;