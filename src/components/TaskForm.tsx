import React, { useState } from 'react';

const TaskForm = ({ onAddTask, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [assignedMembers, setAssignedMembers] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(), // Simple ID generation
      title,
      description,
      dueDate,
      assignedMembers: assignedMembers.split(',').map(member => member.trim()), // Convert to array
      status: 'To Do', // Default status
    };
    onAddTask(newTask);
    setTitle('');
    setDescription('');
    setDueDate('');
    setAssignedMembers('');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-lg font-bold">Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Assigned Members (comma separated)</label>
            <input
              type="text"
              value={assignedMembers}
              onChange={(e) => setAssignedMembers(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mt-6 flex justify-end">
            <button type="button" className="mr-2 text-gray-600" onClick={onClose}>Cancel</button>
            <button type="submit" className="px-4 py-2 text-white bg-indigo-600 rounded-md">Add Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm; 