import './ExpenseDetails.css';

const ExpenseDetails = ({ workout }) => {

  return (
    <div className="workout-details">
      <p><strong>Description: </strong>{workout.Description}</p>
      <p><strong>CompanyName: </strong>{workout.CompanyName}</p>
      <p><strong>EmployeeName: </strong>{workout.EmployeeName}</p>
      <p><strong>Amount:£ </strong>{workout.Amount}</p>
    </div>
  )
}

export default ExpenseDetails