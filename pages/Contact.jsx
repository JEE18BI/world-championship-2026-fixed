import React from "react";

export default function Contact() {
    return (
        <main className="page contact-page">

            {/* =================================================
                HERO
            ================================================= */}

            <section className="contact-hero">

                <div className="contact-hero-content">

                    <span className="eyebrow">
                        07 / CONTACT
                    </span>

                    <h1>
                        GET IN
                        <br />
                        <em>TOUCH</em>
                    </h1>

                    <p>
                        GOLF CROQUET WORLD CHAMPIONSHIP 2026
                        <br />
                        EGYPT · NOVEMBER 21 — 29
                    </p>

                </div>

            </section>


            {/* =================================================
                INTRO
            ================================================= */}

            <section className="contact-intro">

                <div className="contact-intro-number">
                    07
                </div>

                <div className="contact-intro-text">

                    <span className="eyebrow">
                        CHAMPIONSHIP ORGANIZATION
                    </span>

                    <h2>
                        WE'RE HERE
                        <br />
                        <em>TO HELP.</em>
                    </h2>

                    <p>
                        For questions about the World Championship,
                        qualifier events, players, clubs, accommodation
                        or tournament arrangements, please contact
                        one of the organizing team members below.
                    </p>

                </div>

            </section>


            {/* =================================================
                CONTACT TEAM
            ================================================= */}

            <section className="contact-team">

                <div className="contact-team-header">

                    <span className="eyebrow">
                        ORGANIZING TEAM
                    </span>

                    <h2>
                        CONTACT
                        <br />
                        <em>US.</em>
                    </h2>

                </div>


                <div className="contact-grid">

                    {/* =================================================
                        MOHAMED RASLAN
                    ================================================= */}

                    <article className="contact-card">

                        <div className="contact-card-number">
                            01
                        </div>

                        <span className="contact-card-label">
                            CHAMPIONSHIP CONTACT
                        </span>

                        <h3>
                            MOHAMED
                            <br />
                            <em>RASLAN</em>
                        </h3>

                        <div className="contact-card-line"></div>

                        <p className="contact-role">
                            Tournament Organizer
                        </p>

                        <a
                            href="https://wa.me/201005252523"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-button whatsapp-button"
                        >
                            WHATSAPP
                            <span>↗</span>
                        </a>

                    </article>


                    {/* =================================================
                        MOHAMED HASSAN
                    ================================================= */}

                    <article className="contact-card">

                        <div className="contact-card-number">
                            02
                        </div>

                        <span className="contact-card-label">
                            CHAMPIONSHIP CONTACT
                        </span>

                        <h3>
                            MOHAMED
                            <br />
                            <em>HASSAN</em>
                        </h3>

                        <div className="contact-card-line"></div>

                        <p className="contact-role">
                            Tournament Organizer
                        </p>

                        <a
                            href="https://wa.me/201002597737"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-button whatsapp-button"
                        >
                            WHATSAPP
                            <span>↗</span>
                        </a>

                    </article>


                    {/* =================================================
                        YOUR CARD
                    ================================================= */}


                </div>

            </section>


            {/* =================================================
                FINAL SECTION
            ================================================= */}

            <section className="contact-final">

                <div>

                    <span className="eyebrow">
                        EGYPT · 2026
                    </span>

                    <h2>
                        SEE YOU
                        <br />
                        <em>IN EGYPT.</em>
                    </h2>

                </div>

                <img
                    src="/assets/egypt-flag.png"
                    alt="Egyptian flag"
                    className="contact-flag"
                />

            </section>

        </main>
    );
}