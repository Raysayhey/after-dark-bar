import React from 'react';

import Layout from '../components/Layout';

// import about from '../assets/images/about.jpg';

const IndexPage = () => (
  <Layout activeLink="store">
    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-5">
                <span className="section-heading-upper">Kommen Sie vorbei</span>
                <span className="section-heading-lower"></span>
              </h2>
              <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                
                <li className="list-unstyled-item list-hours-item d-flex">
                  Montag  
                  <span className="ml-auto">16:00 - 22:00 </span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Dienstag
                  <span className="ml-auto">16:00 - 22:00 </span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Mittwoch
                  <span className="ml-auto">16:00 - 22:00 </span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Donnerstag
                  <span className="ml-auto">16:00 - 24:00 </span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Freitag
                  <span className="ml-auto">16:00 - 3:00 </span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Samstag
                  <span className="ml-auto">16:00 - 3:00 </span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Sonntag
                  <span className="ml-auto">geschlossen</span>
                </li>
              </ul>
              <p className="address mb-5">
                <em>
                  <strong>Ankerstrasse 119</strong> <br />
                  Eingang an der Müllerstrasse
                 
                  <br />
                  
                </em>
              </p>
              <p className="mb-0">
                <small>
                  <em>Kontaktieren Sie uns</em>
                </small>
                <br />
                <a href="mailto:info@afterdark-bar.ch">info@afterdark-bar.ch</a>
                <br />
                043 ---
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <section className="page-section about-heading">
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
                  <span className="section-heading-upper">
                    Strong Coffee, Strong Roots
                  </span>
                  <span className="section-heading-lower">About Our Cafe</span>
                </h2>
                <p>
                  Founded in 1987 by the Hernandez brothers, our establishment
                  has been serving up rich coffee sourced from artisan farmers
                  in various regions of South and Central America. We are
                  dedicated to travelling the world, finding the best coffee,
                  and bringing back to you here in our cafe.
                </p>
                <p className="mb-0">
                  We guarantee that you will fall in
                  <em>lust</em>
                  with our decadent blends the moment you walk inside until you
                  finish your last sip. Join us for your daily routine, an
                  outing with friends, or simply just to enjoy some alone time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  </Layout>
);

export default IndexPage;
