export default function Hotels() {
  return <main className="page">
      <div className="page-hero hotel-page-hero">

          <div className="hotel-hero-image">
              <img
                  src="/assets/hotel-hero.jpg"
                  alt="Official accommodation for the 2026 Golf Croquet World Championship"
              />
          </div>

          <div className="hotel-hero-overlay"></div>

          <div className="hotel-hero-content">

    <span className="eyebrow">
      04 / HOTELS
    </span>

              <h1>
                  WHERE
                  <br />
                  <em>TO STAY</em>
              </h1>

              <p>
                  ACCOMMODATION FOR PLAYERS & VISITORS
              </p>

          </div>

      </div>
    <section className="content-section"><h2>HOTELS & ACCOMMODATION</h2><p>Official hotels, nearby accommodation, rates, booking information and transportation details will be added here.</p></section>
      {/* =========================================================
    OFFICIAL QUALIFIER HOTEL
========================================================= */}

      <section className="qualifier-hotel">

          {/* LEFT — HOTEL IMAGE */}

          <div className="qualifier-hotel-image">

              <img
                  src="/assets/crowne-plaza.jpg"
                  alt="Crowne Plaza Alexandria Mirage"
              />

              <div className="qualifier-hotel-image-overlay"></div>

              <div className="qualifier-hotel-image-label">
                  <span>OFFICIAL HOTEL</span>
                  <strong>ALEXANDRIA QUALIFIER</strong>
              </div>

              <div className="qualifier-hotel-corner">
                  <span>14 — 18</span>
                  <span>NOV 2026</span>
              </div>

          </div>


          {/* RIGHT — HOTEL INFORMATION */}

          <div className="qualifier-hotel-info">

    <span className="eyebrow">
      04 / ACCOMMODATION
    </span>

              <h2>
                  CROWNE
                  <br />
                  <em>PLAZA</em>
              </h2>

              <h3>
                  ALEXANDRIA MIRAGE
              </h3>

              <p className="qualifier-hotel-location">
                  Victor Emmanuel Square · Smouha · Alexandria, Egypt
              </p>


              <div className="qualifier-hotel-description">

                  <p>
                      Official accommodation for competitors participating
                      in the Alexandria Qualifier.
                  </p>

                  <p>
                      Special event rates are available on a bed and breakfast
                      basis.
                  </p>

              </div>


              {/* RATES */}

              <div className="hotel-rates">

                  <div className="hotel-rate">

                      <span>SGL</span>

                      <strong>
                          $80
                      </strong>

                      <small>
                          PER ROOM / NIGHT
                      </small>

                  </div>


                  <div className="hotel-rate">

                      <span>DBL</span>

                      <strong>
                          $90
                      </strong>

                      <small>
                          PER ROOM / NIGHT
                      </small>

                  </div>


                  <div className="hotel-rate">

                      <span>TRPL</span>

                      <strong>
                          $100
                      </strong>

                      <small>
                          PER ROOM / NIGHT
                      </small>

                  </div>

              </div>


              {/* BOARD INFORMATION */}

              <div className="hotel-board">

                  <div>
                      <span>INCLUDED</span>
                      <strong>BED & BREAKFAST</strong>
                  </div>

                  <div>
                      <span>OPTIONAL</span>
                      <strong>HALF BOARD +$15 / PERSON</strong>
                  </div>

              </div>


              {/* BUTTONS */}

              <div className="hotel-actions">

                  <a
                      href="https://www.google.com/maps/search/?api=1&query=Crowne+Plaza+Alexandria+Mirage+Egypt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="map-button"
                  >
                      <span>OPEN IN GOOGLE MAPS</span>
                      <strong>↗</strong>
                  </a>

                  <button
                      type="button"
                      className="hotel-contact-button"
                      onClick={() => {
                          window.location.href = "tel:+201012195830";
                      }}
                  >
                      <span>HOTEL RESERVATIONS</span>
                      <strong>↗</strong>
                  </button>

              </div>


              {/* CONTACT */}

              <div className="hotel-contact">

                  <span>HOTEL CONTACT</span>

                  <strong>
                      Salma Ghorab
                  </strong>

                  <small>
                      Senior Sales Executive
                  </small>

              </div>

          </div>

      </section>
      {/* =========================================================
    CAIRO OFFICIAL HOTEL
========================================================= */}

      <section className="championship-hotel">

          {/* HOTEL IMAGE */}

          <div className="championship-hotel-image">

              <img
                  src="/assets/president-hotel.jpg"
                  alt="The President Hotel Cairo Zamalek"
              />

              <div className="championship-hotel-overlay"></div>

              <div className="championship-hotel-image-label">
                  <span>OFFICIAL CHAMPIONSHIP HOTEL</span>
                  <strong>CAIRO · ZAMALEK</strong>
              </div>

              <div className="championship-hotel-corner">
                  <span>21 — 29</span>
                  <span>NOV 2026</span>
              </div>

          </div>


          {/* HOTEL INFORMATION */}

          <div className="championship-hotel-info">

    <span className="eyebrow">
      01 / ACCOMMODATION
    </span>

              <h2>
                  THE
                  <br />
                  <em>PRESIDENT</em>
              </h2>

              <h3>
                  HOTEL CAIRO
              </h3>

              <p className="championship-hotel-location">
                  22 Taha Hussein Street · Zamalek · Cairo, Egypt
              </p>


              <div className="championship-hotel-description">

                  <p>
                      Official accommodation option for competitors
                      participating in the 2026 Golf Croquet World Championship.
                  </p>

                  <p>
                      Special championship rates are available on a
                      bed and breakfast basis.
                  </p>

              </div>


              {/* SPECIAL RATES */}

              <div className="championship-hotel-rates">

                  <div className="championship-hotel-rate">

                      <span>DELUXE SINGLE</span>

                      <strong>
                          $120
                      </strong>

                      <small>
                          PER ROOM / NIGHT
                      </small>

                  </div>


                  <div className="championship-hotel-rate">

                      <span>DELUXE DOUBLE</span>

                      <strong>
                          $140
                      </strong>

                      <small>
                          PER ROOM / NIGHT
                      </small>

                  </div>

              </div>


              {/* RATE INFORMATION */}

              <div className="championship-hotel-board">

                  <div>
                      <span>INCLUDED</span>

                      <strong>
                          BED & BREAKFAST
                      </strong>
                  </div>

                  <div>
                      <span>RATE BASIS</span>

                      <strong>
                          NET · NON-COMMISSIONABLE
                      </strong>
                  </div>

              </div>


              {/* BUTTONS */}

              <div className="championship-hotel-actions">

                  <a
                      href="https://www.google.com/maps/search/?api=1&query=The+President+Hotel+Cairo+22+Taha+Hussein+Zamalek"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="map-button"
                  >
                      <span>OPEN IN GOOGLE MAPS</span>
                      <strong>↗</strong>
                  </a>


                  <a
                      href="https://www.thepresidentcairo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hotel-book-button"
                  >
                      <span>HOTEL WEBSITE</span>
                      <strong>↗</strong>
                  </a>

              </div>


              {/* HOTEL CONTACT */}

              <div className="championship-hotel-contact">

                  <span>HOTEL CONTACT</span>

                  <strong>
                      President Hotel Cairo
                  </strong>

                  <small>
                      +20 2 273 507 18
                  </small>

              </div>

          </div>

      </section>
  </main>;
}
