import React from "react";
import { Link } from "react-router-dom";

export default function EgyptianOpen() {
    return (
        <main className="page egyptian-open-page">

            {/* =================================================
                HERO
            ================================================= */}

            <section className="egyptian-open-hero">

                <div className="egyptian-open-hero-content">

                    <span className="eyebrow">
                        EGYPT · 2026
                    </span>

                    <h1>
                        EGYPTIAN
                        <br />
                        <em>OPEN</em>
                    </h1>

                    <p>
                        GOLF CROQUET · DECEMBER 1 — 8, 2026
                    </p>

                </div>


                <div className="egyptian-open-hero-date">

                    <span>
                        AFTER THE WORLDS
                    </span>

                    <strong>
                        01 — 08
                    </strong>

                    <small>
                        DECEMBER 2026
                    </small>

                </div>

            </section>


            {/* =================================================
                INTRO
            ================================================= */}

            <section className="content-section egyptian-open-intro">

                <span className="eyebrow">
                    THE NEXT EVENT
                </span>

                <h2>
                    THE WORLD
                    <br />
                    <em>ENDS.</em>
                    <br />
                    THE GAME
                    <br />
                    <em>CONTINUES.</em>
                </h2>

                <div className="egyptian-open-intro-text">

                    <p>
                        The Egyptian Open follows immediately after the
                        2026 Golf Croquet World Championship, continuing
                        the competition in Egypt into December.
                    </p>

                    <p>
                        Players and visitors can stay on in Egypt and
                        experience another major Golf Croquet event.
                    </p>

                </div>

            </section>


            {/* =================================================
                EVENT DETAILS
            ================================================= */}

            <section className="egyptian-open-details">

                <div className="egyptian-open-details-header">

                    <span className="eyebrow">
                        EVENT INFORMATION
                    </span>

                    <h2>
                        THE
                        <br />
                        <em>OPEN.</em>
                    </h2>

                </div>


                <div className="egyptian-open-info-grid">

                    <div className="egyptian-open-info-card">

                        <span>
                            DATES
                        </span>

                        <strong>
                            01 — 08
                            <br />
                            DECEMBER 2026
                        </strong>

                        <small>
                            Tuesday — Tuesday
                        </small>

                    </div>


                    <div className="egyptian-open-info-card">

                        <span>
                            ENTRY FEE
                        </span>

                        <strong>
                            $200
                        </strong>

                        <small>
                            USD · PER PLAYER
                        </small>

                    </div>


                    <div className="egyptian-open-info-card">

                        <span>
                            LOCATION
                        </span>

                        <strong>
                            EGYPT
                        </strong>

                        <small>
                            Tournament details to follow
                        </small>

                    </div>

                </div>

            </section>


            {/* =================================================
                TIMELINE
            ================================================= */}

            <section className="egyptian-open-timeline">

                <div className="egyptian-open-timeline-header">

                    <span className="eyebrow">
                        EGYPT 2026
                    </span>

                    <h2>
                        ONE TRIP.
                        <br />
                        <em>TWO EVENTS.</em>
                    </h2>

                </div>


                <div className="open-timeline-row">

                    <div className="open-timeline-number">
                        01
                    </div>

                    <div className="open-timeline-info">

                        <span>
                            NOVEMBER 21 — 29
                        </span>

                        <h3>
                            GOLF CROQUET
                            <br />
                            WORLD CHAMPIONSHIP
                        </h3>

                        <Link to="/championship">
                            VIEW CHAMPIONSHIP
                            <strong>↗</strong>
                        </Link>

                    </div>

                </div>


                <div className="open-timeline-line"></div>


                <div className="open-timeline-row active">

                    <div className="open-timeline-number">
                        02
                    </div>

                    <div className="open-timeline-info">

                        <span>
                            DECEMBER 01 — 08
                        </span>

                        <h3>
                            EGYPTIAN
                            <br />
                            OPEN
                        </h3>

                        <small>
                            ENTRY · $200 USD
                        </small>

                    </div>

                </div>

            </section>


            {/* =================================================
                CTA
            ================================================= */}

            <section className="egyptian-open-cta">

                <div>

                    <span className="eyebrow">
                        DECEMBER · EGYPT
                    </span>

                    <h2>
                        KEEP
                        <br />
                        <em>PLAYING.</em>
                    </h2>

                    <p>
                        More information about registration,
                        tournament format, venues and schedule
                        will be announced here.
                    </p>

                </div>


                <div className="egyptian-open-status">
                    <span className="eyebrow">MORE INFORMATION</span>

                    <p>
                        Tournament format, venues, schedule and registration
                        details will be announced here.
                    </p>
                </div>

            </section>

        </main>
    );
}