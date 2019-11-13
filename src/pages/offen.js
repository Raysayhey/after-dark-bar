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
                <span className="section-heading-upper">Komme Sie vorbei</span>
                <span className="section-heading-lower"></span>
              </h2>
              <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                <li className="list-unstyled-item list-hours-item d-flex">
                  Sonntag
                  <span className="ml-auto">Closed</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Montag  
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Dienstag
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Mittwoch
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Donnerstag
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Freitag
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Samstag
                  <span className="ml-auto">9:00 AM to 5:00 PM</span>
                </li>
              </ul>
              <p className="address mb-5">
                <em>
                  <strong>Ankerstrasse 119</strong>
                  <br />
                  Zürich
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
