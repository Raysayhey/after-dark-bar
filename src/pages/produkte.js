import React from 'react';

import Layout from '../components/Layout';

import product1 from '../assets/images/singlemalt-web.jpg';
import product2 from '../assets/images/zigaren.jpeg';
import product4 from '../assets/images/champ_gold_web.jpg';
import product5 from '../assets/images/cocktail_web.jpg';
import product6 from '../assets/images/gin_webber.jpg';


const IndexPage = () => (
  <Layout activeLink="products">
    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex ml-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                Whisky
                </span>
                <span className="section-heading-lower">
                 Single Malt
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={product1}
            alt="after-dark-bar-whisky"
          />
          {/* <div className="product-item-description d-flex mr-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Wir haben für Sie eine Auswahl an Single malt whisky bereit. 
                Gereift über Jahre
                aus den bekannten Whisky Destinationen der Welt.
                
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex mr-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                 {/* text klein */}
                </span>
                <span className="section-heading-lower">
                  Champagner 
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={product4}
            alt="tabak_cbd_after_dark_bar"
          />
          {/* <div className="product-item-description d-flex ml-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Wir haben den wohl besten Champagner an der Langstrasse. 
                Kommen Sie vorbei und lassen
                sich überraschen was es heisst einen wirklich guten Champagner zu geniessen.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">

        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex ml-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  Drinks from Around the World
                </span>
                <span className="section-heading-lower">
                  Cocktails 
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={product5}
            alt=""
          />
          {/* <div className="product-item-description d-flex mr-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Wir legen hohen Wert darauf qualitativ hochwertige 
                Cocktails in jeder Geschmacksrichtung anzubieten.
                Cocktails aus der ganzen Welt.

              </p>
            </div>
          </div> */}

        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex mr-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                 Tabakwaren
                </span>
                <span className="section-heading-lower">
                  Zigarren &amp; CBD
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={product2}
            alt="tabak_cbd_after_dark_bar"
          />
          {/* <div className="product-item-description d-flex ml-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Be uns können Sie Ihre Zigarre oder andere Räucherware beziehen.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">

        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex ml-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  
                </span>
                <span className="section-heading-lower">
                  Gin &amp; Tonic
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={product6}
            alt=""
          />
          {/* <div className="product-item-description d-flex mr-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Wir führen eine riesige Auswahl an Gins und Tonics für den Gin-Tonic 
                oder für den puren Genuss der Gins. Die grosse Auswahl ermöglicht uns einen für Sie 
                abgestimmten Gin-Tonic zu produzieren.
              </p>
            </div>
          </div> */}
          
        </div>
      </div>
    </section>

    {/* <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex mr-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                 kleiner title 
                </span>
                <span className="section-heading-lower">
                   Cognac
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={product2}
            alt="tabak_cbd_after_dark_bar"
          />
          <div className="product-item-description d-flex ml-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Be uns können Sie Ihre Zigarre oder andere Räucherware beziehen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  </Layout>
);

export default IndexPage;
