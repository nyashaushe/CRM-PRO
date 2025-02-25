import React from 'react';

const TaskBoard = ({ tasks, onSelectTask }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {['To Do', 'In Progress', 'Done'].map((status) => (
        <div key={status} className="bg-gray-100 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900">{status}</h3>
          {tasks
            .filter((task) => task.status === status)
            .map((task) => (
              <div key={task.id} className="bg-white rounded-lg p-2 my-2 cursor-pointer" onClick={() => onSelectTask(task)}>
                {task.title}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default TaskBoard; 