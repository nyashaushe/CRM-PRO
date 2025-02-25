import React, { useState } from 'react';
import TaskBoard from './TaskBoard'; // Assuming you will create this component
import ProjectList from './ProjectList'; // Assuming you will create this component
import TaskDetails from './TaskDetails'; // Assuming you will create this component
import { PlusCircle } from 'lucide-react';
import TaskForm from './TaskForm'; // New component for task creation/editing

const ProjectManagement = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [tasks, setTasks] = useState([]); // State to manage tasks

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
    setShowTaskForm(false);
  };

  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-gray-900">Project Management</h1>
      <p className="mt-1 text-gray-600">Manage tasks, deadlines, and team collaboration.</p>

      {/* Project List */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-900">Projects</h2>
        <ProjectList onSelectTask={setSelectedTask} />
      </div>

      {/* Task Board */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-900">Task Board</h2>
        <TaskBoard tasks={tasks} onSelectTask={setSelectedTask} />
      </div>

      {/* Add Task Button */}
      <button className="mt-4 flex items-center text-indigo-600 hover:text-indigo-500" onClick={() => setShowTaskForm(true)}>
        <PlusCircle className="w-5 h-5 mr-2" />
        Add New Task
      </button>

      {/* Task Details */}
      {selectedTask && <TaskDetails task={selectedTask} onClose={() => setSelectedTask(null)} />}
      
      {/* Task Form Modal */}
      {showTaskForm && <TaskForm onAddTask={handleAddTask} onClose={() => setShowTaskForm(false)} />}
    </div>
  );
};

export default ProjectManagement; 