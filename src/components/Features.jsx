import React from 'react';

const Features = () => {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">Why Choose Us?</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 p-2 rounded">
            <i className="bi bi-collection"></i>
          </div>
          <h3 className="fs-2 text-body-emphasis">Professional Design</h3>
          <p>
            Clean, modern, and professional design that will impress your users. 
            Built with the world's most popular front-end open source toolkit, Bootstrap.
          </p>
          <a href="#" className="icon-link">
            Learn More
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 p-2 rounded">
            <i className="bi bi-gear-fill"></i>
          </div>
          <h3 className="fs-2 text-body-emphasis">Easy to Customize</h3>
          <p>
            The code is well-structured and easy to modify. You can change the content, colors, and layout
            to match your brand.
          </p>
          <a href="#" className="icon-link">
            Learn More
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 p-2 rounded">
            <i className="bi bi-speedometer2"></i>
          </div>
          <h3 className="fs-2 text-body-emphasis">Optimized for Speed</h3>
          <p>
            Built with performance in mind. The application loads fast, providing a
            smooth user experience.
          </p>
          <a href="#" className="icon-link">
            Learn More
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
