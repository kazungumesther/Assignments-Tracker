"use client";
import { useState } from "react";

function AssignmentForm({addAssignment}){
    const[title,setTitle]=useState("");
    const[course,setCourse]=useState("");
    const[startDate,setStartDate]=useState("");
    const[dueDate,setDueDate]=useState("");

    const handlesubmit=(e)=>{
        e.preventDefault();

        if (!title ||!course||!startDate ||!dueDate){
            alert("Pleasefill in all fields.");
            return;
        }

        const newAssignment={
            title,
            course,
            startDate,
            dueDate,
            completed:false,

        };

        addAssignment(newAssignment);

        setTitle("");
        setCourse("");
        setStartDate("");
         setDueDate("");
             };

    return(
        <form onSubmit={handlesubmit}>
            <h2>Add Assignment</h2>

            <input type="text" placeholder="Assignment title" value={title}  onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" placeholder="Course" value={course} onChange={(e)=>setCourse(e.target.value)}/>
            <input type="date" value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
            <input type="date" value={dueDate} onChange={(e)=>setDueDate(e.target.value)}/>
            <button type = "submit">Add</button>
            </form>

    );
}
export default AssignmentForm;