import React from 'react';

import Layout from '../components/Layout';

import intro from '../assets/images/after_dark_logo_blau_bg.jpg';
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
              <span className="section-heading-lower">After Dark Bar</span>
            </h2>
            <p className="mb-3">
              Cocktail Bar in der Nähe der Langstrasse. Text Text Text.
              Wir liefern die beste Qualität an Cocktails und Getränke.
              Grosse Auswahl an Getränken und eine gemütliche Atmosphäre für einen Drink am Abend.
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" href="/offen">
                Besuchen Sie uns!
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
                <span className="section-heading-upper">Diesen teil löschen, schreiben oder ersetzen</span>
                <span className="section-heading-lower">Text über die Bar</span>
              </h2>
              <p className="mb-0">
                When you walk into our shop to start your day, we are dedicated
                to providing you with friendly service, a welcoming atmosphere,
                and above all else, excellent products made with the highest
                quality ingredients. If you are not satisfied, please let us
                know and we will do whatever we can to make things right!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
