function AssignmentList({assignments,deleteAssignment, completeAssignment}){
    return(
<div>
    <h2>My Assignments</h2>

    {assignments.length ===0?(
        <p> No assignments yet.</p>
    ):(
    assignments.map((assignment, index)=>{
        const today= new Date();
        today.setHours(0,0,0,0);

        const dueDate= new Date(assignment.dueDate); 
        dueDate.setHours(0,0,0,0);

        let deadlineStatus="On Time";

        if(dueDate.getTime()<today.getTime()){
          deadlineStatus="Overdue";  
        }
        return(
     <div key = {index} className="assignment-card"> 
     <h3>{assignment.title}</h3> 
     <p>Course: {assignment.course}</p>
     <p>Start Date:{assignment.startDate}</p> 
     <p> Due Date: {assignment.dueDate}</p>
     <p className={assignment.completed ? "completed" : "pending"}>
     {assignment.completed ? "Completed" : "Pending"}
   </p>

  <p className={deadlineStatus === "Overdue"? "Overdue":"OnTime"}>
    {deadlineStatus === "Overdue" ?   "Overdue!" : "On Time"}</p>

   

     <button className="delete-btn" onClick={()=>deleteAssignment(index)}>
       
        Delete</button>
    <button className="done-btn" onClick={()=>completeAssignment(index)}>
       
         Mark as Done
        </button>
     </div>
    ); 
    })
)}
</div>
    );
}
export default AssignmentList;