import React from 'react';

import Layout from '../components/Layout';

import about from '../assets/images/bar_eck2.jpg';
const IndexPage = () => (
  <Layout activeLink="about">
    <section className="page-section about-heading">
      <div className="container">
        <img
          className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
          src={about}
          alt=""
        />
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4">
                  {/* <span className="section-heading-upper">
                  
                  </span> */}
                  <span className="section-heading-lower">Mietung der Bar</span>
                </h2>
                <p>
                  Sie können die gesamten Räumlichkeiten der Bar mieten.
                <br />
                  Gerne geben wir telefonisch oder per E-Mail Auskunft über Mindestkonsumation sowie
                  weitere Möglichkeiten.

                </p>
                <p className="mb-0">
                  Wir bieten Ihnen den Rundum Service unserer Mitarbeiter für einen Abend.

                </p>
                <div className="intro-button mx-auto">
                
              <a className="btn btn-primary btn-xl" href="/offen">
                Kontakt
              </a>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
