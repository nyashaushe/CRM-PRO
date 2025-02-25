import React from 'react';

const TaskDetails = ({ task, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-lg font-bold">{task.title}</h2>
        <p className="mt-2">Description: {/* Add description here */}</p>
        <p>Due Date: {/* Add due date here */}</p>
        <p>Assigned Team Members: {/* Add team members here */}</p>
        <button className="mt-4 text-indigo-600" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TaskDetails; 