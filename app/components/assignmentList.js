function AssignmentList({ assignments, deleteAssignment, completeAssignment }) {
  return (
    <div>
      <h2>My Assignments</h2>
      {assignments.length === 0 ? (
        <p> No assignments yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {assignments.map((assignment, index) => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            const startDate = new Date(assignment.startDate);
            startDate.setHours(0, 0, 0, 0);
            
            const dueDate = new Date(assignment.dueDate);
            dueDate.setHours(0, 0, 0, 0);
            
            let deadlineStatus = "On Time";
            
            if (dueDate.getTime() < startDate.getTime()) {
              deadlineStatus = "Invalid Dates";
            } else if (dueDate.getTime() < today.getTime()) {
              deadlineStatus = "Overdue";
            }
            
            return (
              <div 
                key={index} 
                className="assignment-card" 
                style={{ width: '100%', maxWidth: '450px', boxSizing: 'border-box' }}
              >
                <h3>{assignment.title}</h3>
                <p>Course: {assignment.course}</p>
                <p>Start Date: {assignment.startDate}</p>
                <p> Due Date: {assignment.dueDate}</p>
                <p className={assignment.completed ? "completed" : "pending"}>
                  {assignment.completed ? "Completed" : "Pending"}
                </p>
                <p className={
                  deadlineStatus === "Overdue" ? "Overdue" : 
                  deadlineStatus === "Invalid Dates" ? "invalid-date" : "OnTime"
                }>
                  {deadlineStatus === "Overdue" && "Overdue!"}
                  {deadlineStatus === "Invalid Dates" && "Due Date cannot be before Start Date!"}
                  {deadlineStatus === "On Time" && "On Time"}
                </p>
                <button className="delete-btn" onClick={() => deleteAssignment(index)}>
                  Delete
                </button>
                <button className="done-btn" onClick={() => completeAssignment(index)}>
                  Mark as Done
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AssignmentList;
