import React, { useState, useEffect } from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const ProjectModal = ({ project, onSave, onClose, show }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    title_en: '',
    title_th: '',
    description_en: '',
    description_th: '',
    image: '',
  });

  useEffect(() => {
    if (project) {
      setFormData(project);
    } else {
      setFormData({
        title_en: '',
        title_th: '',
        description_en: '',
        description_th: '',
        image: '',
      });
    }
  }, [project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!show) {
    return null;
  }

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">{project ? t('editProject') : t('addProject')}</h5>
                <button type="button" className="btn-close" onClick={onClose}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="title_en" className="form-label">{t('title_en')}</label>
                  <input type="text" className="form-control" id="title_en" name="title_en" value={formData.title_en} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="title_th" className="form-label">{t('title_th')}</label>
                  <input type="text" className="form-control" id="title_th" name="title_th" value={formData.title_th} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="description_en" className="form-label">{t('description_en')}</label>
                  <textarea className="form-control" id="description_en" name="description_en" rows="3" value={formData.description_en} onChange={handleChange} required></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="description_th" className="form-label">{t('description_th')}</label>
                  <textarea className="form-control" id="description_th" name="description_th" rows="3" value={formData.description_th} onChange={handleChange} required></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">{t('imageURL')}</label>
                  <input type="url" className="form-control" id="image" name="image" value={formData.image} onChange={handleChange} required />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>{t('cancel')}</button>
                <button type="submit" className="btn btn-primary">{t('save')}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
