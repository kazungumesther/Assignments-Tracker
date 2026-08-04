"use client";
import { useState } from "react";

function AssignmentForm({ addAssignment }) {
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!title || !course || !startDate || !dueDate) {
      alert("Please fill in all fields.");
      return;
    }
    const newAssignment = {
      title,
      course,
      startDate,
      dueDate,
      completed: false,
    };
    addAssignment(newAssignment);
    setTitle("");
    setCourse("");
    setStartDate("");
    setDueDate("");
  };

  return (
    <form onSubmit={handlesubmit} className="assignment-form">
      <h2>Add Assignment</h2>
      <div className="form-fields-container">
        <input
          type="text"
          placeholder="Assignment title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-input"
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="text-input"
        />

        <div className="date-input-group">
          <label className="date-label">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="date-input"
          />
        </div>

        <div className="date-input-group">
          <label className="date-label">End Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="date-input"
          />
        </div>

        <button type="submit" className="submit-btn">
          Add
        </button>
      </div>
    </form>
  );
}

export default AssignmentForm;
