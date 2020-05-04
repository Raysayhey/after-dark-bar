import React from 'react';

import Layout from '../components/Layout';

import intro from '../assets/images/schwarz_rechts_logo.jpg';

const IndexPage = () => (
  <Layout activeLink="home">
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <img
            className="intro-img img-fluid mb-3 mb-lg-0 rounded"
            src={intro}
            alt=""
          />
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper"></span>
              
              <span className="section-heading-lower">After Dark</span>
            
            </h2>
            <h6>
            <p className="mb-2 ">
            Wir freuen uns auf ihren Besuch!
            </p>
            </h6>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" href="/offen">
                Öffnungszeiten
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper"></span>
                <span className="section-heading-lower">Die Bar</span>
                
              </h2>
              <p className="mb-0">
              Cocktail Bar in der Nähe der Langstrasse in Zürich. 
              Wir servieren qualitativ hochwertige Cocktails sowie eine breite Auswahl an Getränken.
              Die Bar lädt zu einem Drink ein in gemütlicher Atmosphäre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
