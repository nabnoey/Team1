import React from 'react';
import ProjectList from '../components/ProjectList';

const ProjectsPage = ({ projects, onEdit, onDelete }) => {
  return (
    <div className="container px-4 py-5">
      <ProjectList projects={projects} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
};

export default ProjectsPage;
