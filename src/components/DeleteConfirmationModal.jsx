import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const DeleteConfirmationModal = ({ show, onConfirm, onCancel, project }) => {
  const { t, language } = useTranslation();

  if (!show) {
    return null;
  }

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{t('deleteConfirmTitle')}</h5>
              <button type="button" className="btn-close" onClick={onCancel}></button>
            </div>
            <div className="modal-body">
              <p>{t('deleteConfirmText')}</p>
              <p className="text-danger fw-bold">{project?.[`title_${language}`]}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onCancel}>
                {t('cancel')}
              </button>
              <button type="button" className="btn btn-danger" onClick={onConfirm}>
                {t('deleteConfirmButton')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteConfirmationModal;
