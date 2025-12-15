import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProjectModal from './components/ProjectModal';
import DeleteConfirmationModal from './components/DeleteConfirmationModal';
import { mockProjects } from './data/mockProjects';

import './App.css';

function App() {
  const [projects, setProjects] = useState(mockProjects);
  
  // State for Add/Edit Modal
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  // State for Delete Modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingProject, setDeletingProject] = useState(null);

  const handleAddProject = () => {
    setEditingProject(null);
    setShowProjectModal(true);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setShowProjectModal(true);
  };

  const handleSaveProject = (savedProject) => {
    if (savedProject.id) {
      setProjects(projects.map(p => p.id === savedProject.id ? savedProject : p));
    } else {
      const newProject = { ...savedProject, id: Date.now() };
      setProjects([...projects, newProject]);
    }
    setShowProjectModal(false);
    setEditingProject(null);
  };

  const handleDeleteProject = (project) => {
    setDeletingProject(project);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    setProjects(projects.filter(p => p.id !== deletingProject.id));
    setShowDeleteModal(false);
    setDeletingProject(null);
  };

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route 
            path="/projects" 
            element={
              <ProjectsPage
                projects={projects}
                onAdd={handleAddProject}
                onEdit={handleEditProject}
                onDelete={handleDeleteProject}
              />
            } 
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
      <Footer />
      
      <ProjectModal 
        show={showProjectModal}
        project={editingProject}
        onSave={handleSaveProject}
        onClose={() => setShowProjectModal(false)}
      />

      <DeleteConfirmationModal
        show={showDeleteModal}
        project={deletingProject}
        onConfirm={handleConfirmDelete}
        onCancel={() => setShowDeleteModal(false)}
      />
    </BrowserRouter>
  );
}

export default App;

