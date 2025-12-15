import React from 'react';

const Hero = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">Welcome to System1</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          This is a modern, professional, and beautifully designed homepage created for you. 
          It's fully responsive and ready to be customized to fit your needs.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            Get Started
          </button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
