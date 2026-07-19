import "./App.css";

import { useState } from 'react';

import AssignmentForm from './components/AssignmentForm';
import AssignmentList from './components/AssignmentList';

function App() {
  const[assignments,setAssignments]=useState([]);

  const addAssignment=(assignment)=>{
  setAssignments([...assignments,assignment]);
};

const deleteAssignment= (index)=>{
  const updatedAssignments= assignments.filter(
   (_,i) =>i !==index
  );
  setAssignments(updatedAssignments);
};

const completeAssignment= (index)=>{
  const updatedAssignments= [...assignments];
  
  updatedAssignments[index].completed=true;
  setAssignments(updatedAssignments);
};



  return (
   <div>
    <h1>Student Assignment Tracker</h1>

    <AssignmentForm addAssignment={addAssignment}/>

    <AssignmentList assignments={assignments} deleteAssignment={deleteAssignment} completeAssignment={completeAssignment}/>
   </div>
  );
}  

export default App;
