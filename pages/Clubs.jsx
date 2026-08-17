import React, { useState } from "react";

const clubs = [
    {
        id: "01",
        name: "Gezira Club",
        location: "Cairo, Egypt",
        image: "/assets/1.jpg",
        mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Gezira+Club+Cairo+Egypt",
    },
    {
        id: "02",
        name: "Zamalek Club",
        location: "Cairo, Egypt",
        image: "/assets/2.jpg",
        mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Zamalek+Club+Cairo+Egypt",
    },
    {
        id: "03",
        name: "El Zohour Club",
        location: "Cairo, Egypt",
        image: "/assets/3.jpg",
        mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=El+Zohour+Club+Cairo+Egypt",
    },
    {
        id: "04",
        name: "Heliopolis El Shorouk Club",
        location: "El Shorouk, Cairo",
        image: "/assets/4.jpg",
        mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Heliopolis+El+Shorouk+Club+Egypt",
    },
    {
        id: "05",
        name: "Shooting Club",
        location: "Cairo, Egypt",
        image: "/assets/5.jpg",
        mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Shooting+Club+Cairo+Egypt",
    },
    {
        id: "06",
        name: "Egyptian Federation",
        location: "Cairo, Egypt",
        image: "/assets/6.jpg",
        mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Egyptian+Croquet+Federation+Cairo+Egypt",
    },
    {
        id: "07",
        name: "Nasr City Club",
        location: "Nasr City, Cairo",
        image: "/assets/7.jpg",
        mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Nasr+City+Club+Cairo+Egypt",
    },
];

export default function Clubs() {
    const [selectedClub, setSelectedClub] = useState(clubs[0]);

    return (
        <main className="clubs-page">

            {/* =========================================
          HERO
      ========================================= */}

            <section className="clubs-hero">

                <div className="clubs-hero-overlay"></div>

                <div className="clubs-hero-content">

          <span className="eyebrow">
            2026 GOLF CROQUET WORLD CHAMPIONSHIP
          </span>

                    <h1>
                        CHAMPIONSHIP
                        <br />
                        <em>VENUES</em>
                    </h1>

                    <p>
                        SEVEN CLUBS.
                        <br />
                        ONE WORLD CHAMPIONSHIP.
                    </p>

                </div>

                <div className="clubs-hero-number">
                    <strong>07</strong>
                    <span>VENUES</span>
                </div>

            </section>


            {/* =========================================
          INTRODUCTION
      ========================================= */}

            <section className="clubs-intro">

                <div className="clubs-section-label">
                    01 / THE VENUES
                </div>

                <div className="clubs-intro-content">

                    <h2>
                        THE CHAMPIONSHIP
                        <br />
                        <span>CIRCUIT.</span>
                    </h2>

                    <p>
                        The 2026 Golf Croquet World Championship brings competitors
                        together across seven clubs and sporting venues in Egypt.
                        Explore the venues that will form the championship circuit.
                    </p>

                </div>

            </section>


            {/* =========================================
          CLUB SHOWCASE
      ========================================= */}

            <section className="clubs-showcase">

                {/* -----------------------------------------
            LEFT — CLUB SELECTOR
        ----------------------------------------- */}

                <div className="clubs-selector">

                    <div className="clubs-selector-header">

                        <div>

              <span className="eyebrow">
                02 / VENUES
              </span>

                            <h2>
                                THE
                                <br />
                                <em>CLUBS</em>
                            </h2>

                        </div>

                        <span className="clubs-count">
              07
            </span>

                    </div>


                    <div className="club-list">

                        {clubs.map((club) => (

                            <button
                                key={club.id}
                                type="button"
                                className={`club-selector ${
                                    selectedClub.id === club.id ? "selected" : ""
                                }`}
                                onClick={() => setSelectedClub(club)}
                            >

                <span className="club-selector-number">
                  {club.id}
                </span>

                                <span className="club-selector-info">

                  <strong>
                    {club.name}
                  </strong>

                  <small>
                    {club.location}
                  </small>

                </span>

                                <span className="club-selector-arrow">
                  →
                </span>

                            </button>

                        ))}

                    </div>

                </div>


                {/* -----------------------------------------
            RIGHT — CLUB IMAGE
        ----------------------------------------- */}

                <div className="club-image-showcase">

                    <img
                        key={selectedClub.id}
                        src={selectedClub.image}
                        alt={`${selectedClub.name} championship venue`}
                    />

                    <div className="club-image-overlay"></div>


                    {/* Top right information */}

                    <div className="club-image-corner">

            <span>
              WCF
            </span>

                        <span>
              2026
            </span>

                    </div>


                    {/* Main image information */}

                    <div className="club-image-content">

            <span className="club-image-number">
              {selectedClub.id} / 07
            </span>

                        <h2>
                            {selectedClub.name}
                        </h2>

                        <p>
                            {selectedClub.location}
                        </p>


                        {/* Google Maps button */}

                        <a
                            href={selectedClub.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="map-button"
                        >

              <span>
                OPEN IN GOOGLE MAPS
              </span>

                            <strong>
                                ↗
                            </strong>

                        </a>

                    </div>

                </div>

            </section>


            {/* =========================================
          CURRENT VENUE
      ========================================= */}

            <section className="selected-club-section">

                <div className="selected-club-number">
                    {selectedClub.id}
                </div>

                <div className="selected-club-content">

          <span className="eyebrow">
            CURRENT VENUE
          </span>

                    <h2>
                        {selectedClub.name}
                    </h2>

                    <p>
                        {selectedClub.location}
                    </p>

                    <a
                        href={selectedClub.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="map-button"
                    >

            <span>
              GET DIRECTIONS
            </span>

                        <strong>
                            ↗
                        </strong>

                    </a>

                </div>

            </section>

        </main>
    );
}