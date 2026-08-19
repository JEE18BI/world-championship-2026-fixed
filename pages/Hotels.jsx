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
      {/* =========================================================
    CAIRO CHAMPIONSHIP PROGRAM
========================================================= */}

      <section className="cairo-program">

          <div className="cairo-program-header">

              <div>
            <span className="eyebrow">
                02 / CAIRO PROGRAM
            </span>

                  <h2>
                      CAIRO
                      <br />
                      <em>PROGRAM</em>
                  </h2>
              </div>

              <div className="cairo-program-meta">
                  <strong>11 NTS / 12 DAYS</strong>
                  <span>19 — 30 NOV 2026</span>
              </div>

          </div>


          {/* =====================================================
        DAILY PROGRAM
    ===================================================== */}

          <div className="cairo-itinerary">

              {/* 19 NOV */}

              <div className="cairo-day">

                  <div className="cairo-day-date">
                      <strong>19</strong>
                      <span>NOV · THU</span>
                  </div>

                  <div className="cairo-day-content">

                <span className="day-type included">
                    ARRIVAL
                </span>

                      <h3>
                          Arrival in Cairo ✈️
                      </h3>

                      <p>
                          Airport meet & assist, private transfer to hotel,
                          check-in and rest.
                      </p>

                  </div>

              </div>


              {/* 20 NOV */}

              <div className="cairo-day optional">

                  <div className="cairo-day-date">
                      <strong>20</strong>
                      <span>NOV · FRI</span>
                  </div>

                  <div className="cairo-day-content">

                <span className="day-type">
                    OPTIONAL · $112
                </span>

                      <h3>
                          Old Cairo & Islamic Cairo
                      </h3>

                      <p>
                          Citadel of Saladin, Mohamed Ali Mosque,
                          Al-Azhar area and Khan El Khalili bazaar.
                      </p>

                  </div>

              </div>


              {/* 21 NOV */}

              <div className="cairo-day optional featured-day">

                  <div className="cairo-day-date">
                      <strong>21</strong>
                      <span>NOV · SAT</span>
                  </div>

                  <div className="cairo-day-content">

                <span className="day-type">
                    OPTIONAL · $161
                </span>

                      <h3>
                          Pyramids & Grand Egyptian Museum ⭐
                      </h3>

                      <p>
                          Early morning visit to Giza Pyramids, Sphinx
                          and Valley Temple. Lunch. Afternoon at the
                          Grand Egyptian Museum (GEM), including Grand
                          Hall, Grand Stairs, main galleries and
                          Tutankhamun galleries. Return to hotel
                          in the evening.
                      </p>

                  </div>

              </div>


              {/* 22 NOV */}

              <div className="cairo-day optional">

                  <div className="cairo-day-date">
                      <strong>22</strong>
                      <span>NOV · SUN</span>
                  </div>

                  <div className="cairo-day-content">

                <span className="day-type">
                    OPTIONAL · $95
                </span>

                      <h3>
                          Saqqara & Memphis
                      </h3>

                      <p>
                          Step Pyramid of Djoser, tombs at Saqqara,
                          ancient Memphis and Colossus of Ramses II.
                      </p>

                  </div>

              </div>


              {/* 23 NOV */}

              <div className="cairo-day optional">

                  <div className="cairo-day-date">
                      <strong>23</strong>
                      <span>NOV · MON</span>
                  </div>

                  <div className="cairo-day-content">

                <span className="day-type">
                    OPTIONAL · $110
                </span>

                      <h3>
                          Cairo Highlights
                      </h3>

                      <p>
                          Egyptian Museum in Tahrir Square, downtown Cairo,
                          Nile Corniche and time for shopping.
                      </p>

                  </div>

              </div>


              {/* 24 NOV */}

              <div className="cairo-day free-day">

                  <div className="cairo-day-date">
                      <strong>24</strong>
                      <span>NOV · TUE</span>
                  </div>

                  <div className="cairo-day-content">

                <span className="day-type">
                    FREE DAY
                </span>

                      <h3>
                          Free / Leisure Day
                      </h3>

                      <p>
                          Relax at hotel.
                      </p>

                  </div>

              </div>


              {/* 25 NOV */}

              <div className="cairo-day free-day">

                  <div className="cairo-day-date">
                      <strong>25</strong>
                      <span>NOV · WED</span>
                  </div>

                  <div className="cairo-day-content">

                <span className="day-type">
                    FREE DAY
                </span>

                      <h3>
                          Free / Leisure Day
                      </h3>

                      <p>
                          Relax at hotel.
                      </p>

                  </div>

              </div>


              {/* 26 NOV */}

              <div className="cairo-day optional">

                  <div className="cairo-day-date">
                      <strong>26</strong>
                      <span>NOV · THU</span>
                  </div>

                  <div className="cairo-day-content">

                <span className="day-type">
                    OPTIONAL · $126
                </span>

                      <h3>
                          Alexandria Day Trip
                      </h3>

                      <p>
                          Full-day private excursion to Alexandria:
                          Catacombs of Kom El Shoqafa, Pompey's Pillar,
                          Qaitbay Citadel, Bibliotheca Alexandrina and
                          seaside Corniche. Return to Cairo.
                      </p>

                  </div>

              </div>


              {/* 27 NOV */}

              <div className="cairo-day optional">

                  <div className="cairo-day-date">
                      <strong>27</strong>
                      <span>NOV · FRI</span>
                  </div>

                  <div className="cairo-day-content">

                <span className="day-type">
                    OPTIONAL · $52
                </span>

                      <h3>
                          Nile Dinner Cruise
                      </h3>

                      <p>
                          Relaxed morning. Optional Nile dinner cruise
                          with dinner and entertainment in the evening.
                      </p>

                  </div>

              </div>


              {/* 28 NOV */}

              <div className="cairo-day free-day">

                  <div className="cairo-day-date">
                      <strong>28</strong>
                      <span>NOV · SAT</span>
                  </div>

                  <div className="cairo-day-content">

                <span className="day-type">
                    FREE DAY
                </span>

                      <h3>
                          Free / Leisure Day
                      </h3>

                      <p>
                          Relax at hotel.
                      </p>

                  </div>

              </div>


              {/* 29 NOV */}

              <div className="cairo-day free-day">

                  <div className="cairo-day-date">
                      <strong>29</strong>
                      <span>NOV · SUN</span>
                  </div>

                  <div className="cairo-day-content">

                <span className="day-type">
                    FREE DAY
                </span>

                      <h3>
                          Free / Leisure Day
                      </h3>

                      <p>
                          Relax at hotel.
                      </p>

                  </div>

              </div>


              {/* 30 NOV */}

              <div className="cairo-day">

                  <div className="cairo-day-date">
                      <strong>30</strong>
                      <span>NOV · MON</span>
                  </div>

                  <div className="cairo-day-content">

                <span className="day-type included">
                    DEPARTURE
                </span>

                      <h3>
                          Departure ✈️
                      </h3>

                      <p>
                          Breakfast, check-out and private transfer
                          from hotel to Cairo International Airport
                          according to flight time.
                      </p>

                  </div>

              </div>

          </div>


          {/* =====================================================
        PACKAGE OPTIONS
    ===================================================== */}

          <div className="cairo-packages">

              <div className="cairo-section-title">

            <span className="eyebrow">
                PACKAGE OPTIONS
            </span>

                  <h3>
                      CHOOSE YOUR
                      <br />
                      <em>HOTEL.</em>
                  </h3>

              </div>


              <div className="package-grid">


                  {/* PRESIDENT */}

                  <div className="package-card">

                <span className="package-number">
                    01
                </span>

                      <span className="package-label">
                    OPTION 01
                </span>

                      <h4>
                          PRESIDENT
                          <br />
                          <em>ZAMALEK HOTEL</em>
                      </h4>

                      <div className="package-prices">

                          <div>
                              <span>DOUBLE</span>
                              <strong>$950</strong>
                              <small>PER PERSON</small>
                          </div>

                          <div>
                              <span>SINGLE</span>
                              <strong>$1,500</strong>
                              <small>PER PERSON</small>
                          </div>

                      </div>

                  </div>


                  {/* HILTON ZAMALEK */}

                  <div className="package-card">

                <span className="package-number">
                    02
                </span>

                      <span className="package-label">
                    OPTION 02
                </span>

                      <h4>
                          HILTON
                          <br />
                          <em>ZAMALEK HOTEL</em>
                      </h4>

                      <div className="package-prices">

                          <div>
                              <span>DOUBLE</span>
                              <strong>$1,115</strong>
                              <small>PER PERSON</small>
                          </div>

                          <div>
                              <span>SINGLE</span>
                              <strong>$2,050</strong>
                              <small>PER PERSON</small>
                          </div>

                      </div>

                  </div>


                  {/* GRAND NILE */}

                  <div className="package-card package-featured">

                <span className="package-number">
                    03
                </span>

                      <span className="package-label">
                    OPTION 03
                </span>

                      <h4>
                          HILTON GRAND
                          <br />
                          <em>NILE TOWER</em>
                      </h4>

                      <div className="package-prices">

                          <div>
                              <span>DOUBLE</span>
                              <strong>$1,500</strong>
                              <small>PER PERSON</small>
                          </div>

                          <div>
                              <span>SINGLE</span>
                              <strong>$2,600</strong>
                              <small>PER PERSON</small>
                          </div>

                      </div>

                  </div>

              </div>

          </div>


          {/* =====================================================
        INCLUDED / EXCLUDED
    ===================================================== */}

          <div className="package-details">

              <div className="package-detail-box">

            <span className="eyebrow">
                PACKAGE INCLUDES
            </span>

                  <ul>
                      <li>11 nights hotel accommodation in Cairo</li>
                      <li>Daily breakfast</li>
                      <li>Private airport arrival transfer on 19 Nov</li>
                      <li>Private airport departure transfer on 30 Nov</li>
                  </ul>

              </div>


              <div className="package-detail-box excluded">

            <span className="eyebrow">
                PACKAGE EXCLUDES
            </span>

                  <ul>
                      <li>Entry visa to Egypt ($40 per person and subject to any official increase)</li>
                      <li>Any extra meals and beverages</li>
                      <li>Personal expenses such as laundry and phone calls</li>
                      <li>Tipping to guide, driver, etc.</li>
                      <li>Any optional tours</li>
                      <li>Domestic flight</li>
                  </ul>

              </div>

          </div>


          {/* =====================================================
        RESERVATIONS
    ===================================================== */}

          <div className="cairo-reservations">

        <span className="eyebrow">
            RESERVATIONS & INQUIRIES
        </span>

              <h3>
                  READY TO
                  <br />
                  <em>BOOK?</em>
              </h3>

              <p>
                  For reservations or inquiries, please contact:
              </p>

              <div className="reservation-contacts">

                  <a href="mailto:shereen.hanna@gattours.com">
                      shereen.hanna@gattours.com
                  </a>

                  <a href="mailto:Hesham.seada@gattours.com">
                      Hesham.seada@gattours.com
                  </a>

                  <a href="mailto:m.raslan7961@gmail.com">
                      m.raslan7961@gmail.com
                  </a>

              </div>

              <div className="reservation-subject">
                  <span>EMAIL SUBJECT</span>
                  <strong>
                      World Crocquet Championship 2026
                  </strong>
              </div>

          </div>

      </section>
  </main>;
}
