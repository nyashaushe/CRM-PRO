import React from 'react';

const ProjectList = ({ onSelectTask }) => {
  const projects = [
    { id: 1, name: 'Project Alpha', status: 'In Progress' },
    { id: 2, name: 'Project Beta', status: 'Not Started' },
    { id: 3, name: 'Project Gamma', status: 'Completed' },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="flex justify-between items-center p-2 border-b">
            <span className="font-medium">{project.name}</span>
            <span className={`text-sm ${project.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
              {project.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList; 