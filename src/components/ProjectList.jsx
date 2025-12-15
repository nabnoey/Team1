import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const ProjectList = ({ projects, onEdit, onDelete, onAdd }) => {
  const { t, language } = useTranslation();

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="pb-2 border-bottom">{t('projectsTitle')}</h1>
        <button className="btn btn-primary" onClick={onAdd}>
          <i className="bi bi-plus-lg me-2"></i>
          {t('addProject')}
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projects.map((project) => (
          <div key={project.id} className="col">
            <div className="card h-100 shadow-sm">
              <img src={project.image} className="card-img-top" alt={project[`title_${language}`]} />
              <div className="card-body">
                <h5 className="card-title">{project[`title_${language}`]}</h5>
                <p className="card-text">{project[`description_${language}`]}</p>
              </div>
              <div className="card-footer bg-transparent border-top-0">
                <div className="d-flex justify-content-end">
                  <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => onEdit(project)}>
                    {t('edit')}
                  </button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(project)}>
                    {t('delete')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectList;
