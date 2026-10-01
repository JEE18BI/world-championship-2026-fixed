import React from "react";

export const qualifierPlayers = [
    { no: 1, name: "Ahmed Eltaweel", grade: 2331, worldRank: 113, country: "Egypt" },
    { no: 2, name: "Kamal Ashraf", grade: 2277, worldRank: 159, country: "Egypt" },
    { no: 3, name: "Salah Hassan", grade: 2222, worldRank: 236, country: "Egypt" },
    { no: 4, name: "Manal Khodeir", grade: 2218, worldRank: 245, country: "Egypt" },
    { no: 5, name: "Hossam Elatfy", grade: 2215, worldRank: 252, country: "Egypt" },
    { no: 6, name: "Sherif Eltarahony", grade: 2182, worldRank: 320, country: "Egypt" },
    { no: 7, name: "Mohamed Abelnour", grade: 2171, worldRank: 342, country: "Egypt" },
    { no: 8, name: "Gabrielle Higgins", grade: 2168, worldRank: 348, country: "England" },
    { no: 9, name: "Youssef Elsewify", grade: 2166, worldRank: 353, country: "Egypt" },
    { no: 10, name: "Peter Payne", grade: 2139, worldRank: 429, country: "Switzerland" },
    { no: 11, name: "May Aly Maher", grade: 2134, worldRank: 442, country: "Egypt" },
    { no: 12, name: "Begona Elzahuru", grade: 2131, worldRank: 448, country: "Spain" },
    { no: 13, name: "Hazem Zaghloul", grade: 2126, worldRank: 461, country: "Egypt" },
    { no: 14, name: "Hossam Elsaid", grade: 2125, worldRank: 463, country: "Egypt" },
    { no: 15, name: "Ahmed Alshurafa", grade: 2088, worldRank: 581, country: "Canada" },
    { no: 16, name: "Amr Elsweify", grade: 2079, worldRank: 613, country: "Egypt" },
    { no: 17, name: "Tomass Freimanis", grade: 2016, worldRank: 872, country: "Latvia" },
    { no: 18, name: "Alfonso Ayuso", grade: 2005, worldRank: 938, country: "Spain" },
    { no: 19, name: "Samy Ahmed", grade: 1973, worldRank: 1186, country: "Egypt" },
    { no: 20, name: "Sherif Abuosbaa", grade: 1968, worldRank: 1226, country: "Egypt" },
    { no: 21, name: "Pilar Plasencia", grade: 1959, worldRank: 1286, country: "Spain" },
    { no: 22, name: "Aly Ramadan", grade: 1957, worldRank: 1304, country: "Egypt" },
    { no: 23, name: "Aly Radwan", grade: 1948, worldRank: 1385, country: "Egypt" },
    { no: 24, name: "Abobakr Yousif", grade: 1930, worldRank: 1529, country: "Egypt" },
    { no: 25, name: "Salah Taher", grade: 1910, worldRank: 1694, country: "Egypt" },
    { no: 26, name: "Tarek Sahmoud", grade: 1809, worldRank: 2697, country: "Egypt" },
    { no: 27, name: "Richard Stokoe", grade: 1773, worldRank: 3207, country: "England" },
    { no: 28, name: "Manuel Marcos Fal", grade: 1653, worldRank: 4884, country: "Spain" },
    { no: 29, name: "Sarah Persons", grade: 1638, worldRank: 5094, country: "USA" },
    { no: 30, name: "Pilar Prado Latorre", grade: 1410, worldRank: 8891, country: "Spain" },
];

export default function Qualifier() {
    return (
        <main className="page qualifier-page">

            {/* =================================================
                HERO
            ================================================= */}

            <section className="page-hero qualifier-hero">

                <span className="eyebrow">
                    02 / QUALIFIER
                </span>

                <h1>
                    THE ROAD
                    <br />
                    <em>BEGINS HERE.</em>
                </h1>

                <p>
                    NOVEMBER 14 — 18, 2026
                </p>

            </section>


            {/* =================================================
                INTRO
            ================================================= */}

            <section className="content-section qualifier-intro">

                <span className="eyebrow">
                    GCWC 2026
                </span>

                <h2>
                    QUALIFY
                    <br />
                    <em>FOR EGYPT.</em>
                </h2>

                <p>
                    The GCWC 2026 Qualifying Tournament will take place
                    in Alexandria, Egypt, from Saturday 14 to Wednesday
                    18 November 2026.
                </p>

                <p>
                    Four places in the Golf Croquet World Championship
                    will be awarded through the qualifying tournament.
                </p>

            </section>


            {/* =================================================
                TOURNAMENT DETAILS
            ================================================= */}

            <section className="qualifier-details">

                <div className="qualifier-details-header">

                    <span className="eyebrow">
                        TOURNAMENT INFORMATION
                    </span>

                    <h2>
                        THE
                        <br />
                        <em>DETAILS.</em>
                    </h2>

                </div>


                <div className="qualifier-info-grid">

                    <div className="qualifier-info-card">

                        <span>VENUES</span>

                        <strong>
                            Alexandria Sporting Club
                            <br />
                            & Smouha Club
                        </strong>

                        <small>
                            Alexandria, Egypt
                        </small>

                    </div>


                    <div className="qualifier-info-card">

                        <span>DATES</span>

                        <strong>
                            14 — 18
                            <br />
                            NOVEMBER 2026
                        </strong>

                        <small>
                            Saturday — Wednesday
                        </small>

                    </div>


                    <div className="qualifier-info-card">

                        <span>QUALIFIER PLACES</span>

                        <strong>
                            04
                        </strong>

                        <small>
                            Places into GCWC 2026
                        </small>

                    </div>


                    <div className="qualifier-info-card">

                        <span>ENTRY CAPACITY</span>

                        <strong>
                            40
                        </strong>

                        <small>
                            Competitors
                        </small>

                    </div>


                    <div className="qualifier-info-card">

                        <span>ENTRY FEE</span>

                        <strong>
                            £80
                        </strong>

                        <small>
                            Per entry
                        </small>

                    </div>


                    <div className="qualifier-info-card">

                        <span>ALLOCATION DATE</span>

                        <strong>
                            30 SEP
                            <br />
                            2026
                        </strong>

                        <small>
                            Qualifying Tournament Allocation
                        </small>

                    </div>

                </div>

            </section>


            {/* =================================================
                IMPORTANT DATES
            ================================================= */}

            <section className="qualifier-dates">

                <div className="qualifier-dates-header">

                    <span className="eyebrow">
                        IMPORTANT DATES
                    </span>

                    <h2>
                        MARK
                        <br />
                        <em>THE DATES.</em>
                    </h2>

                </div>


                <div className="date-row">

                    <div className="date-number">
                        01
                    </div>

                    <div className="date-info">

                        <span>
                            ENTRY DATE
                        </span>

                        <h3>
                            ON OR BEFORE
                            <br />
                            30 SEPTEMBER 2026
                        </h3>

                    </div>

                </div>


                <div className="date-row">

                    <div className="date-number">
                        02
                    </div>

                    <div className="date-info">

                        <span>
                            CLOSING DATE
                        </span>

                        <h3>
                            30 OCTOBER 2026
                        </h3>

                    </div>

                </div>


                <div className="date-row">

                    <div className="date-number">
                        03
                    </div>

                    <div className="date-info">

                        <span>
                            QUALIFYING TOURNAMENT
                        </span>

                        <h3>
                            14 — 18 NOVEMBER 2026
                        </h3>

                    </div>

                </div>

            </section>


            {/* =================================================
                REGISTRATION
            ================================================= */}

            <section className="qualifier-registration">

                <div className="registration-header">

                    <span className="eyebrow">
                        ENTRY REGISTRATION
                    </span>

                    <h2>
                        READY TO
                        <br />
                        <em>ENTER?</em>
                    </h2>

                    <p>
                        Entry registration is by email to the Egyptian
                        Croquet Federation, with a copy to the
                        Secretary-General.
                    </p>

                </div>


                <div className="registration-contact">

                    <span>
                        ECF EMAIL
                    </span>

                    <a href="mailto:m.raslan7961@gmail.com">
                        m.raslan7961@gmail.com
                        <strong>↗</strong>
                    </a>

                </div>


                <div className="registration-instructions">

                    <div>
                        <span>01</span>

                        <p>
                            Send your entry by email to the Egyptian
                            Croquet Federation ECF email address.
                        </p>
                    </div>

                    <div>
                        <span>02</span>

                        <p>
                            Copy the Secretary-General on the
                            registration email.
                        </p>
                    </div>

                    <div>
                        <span>03</span>

                        <p>
                            Transfer the entry fee directly to the
                            account of the Egyptian Croquet Federation.
                        </p>
                    </div>

                    <div>
                        <span>04</span>

                        <p>
                            Send a copy of the bank transfer by email
                            to the Egyptian Croquet Federation,
                            the WCF Treasurer and the Secretary-General.
                        </p>
                    </div>

                </div>

            </section>


            {/* =================================================
                SIGN UP / WHATSAPP
            ================================================= */}

            <section className="content-section qualifier-signup-section">

                <div className="qualifier-signup">

                    <h3>
                        WANT TO SIGN UP
                        <br />
                        FOR THE QUALIFIERS?
                    </h3>

                    <p>
                        Spots are limited to 40 competitors.
                        Contact the organizing team to reserve
                        your place.
                    </p>

                    <a
                        href="https://wa.me/201005252523"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CONTACT US ON WHATSAPP
                        · +20 100 525 2523
                    </a>

                </div>

            </section>

            <section className="qualifier-players">
                <div className="qualifier-players-header">
                    <div>
                        <span className="eyebrow">GCWC EGYPT 2026</span>
                        <h2>
                            THE
                            <br />
                            <em>PLAYERS.</em>
                        </h2>
                    </div>

                    <div className="qualifier-players-meta">
                        <strong>{qualifierPlayers.length}</strong>
                        <span>REGISTERED PLAYERS</span>
                        <small>UPDATED 30 SEPTEMBER 2026 · 5:00 PM</small>
                    </div>
                </div>

                <div className="qualifier-players-table-wrap">
                    <table className="qualifier-players-table">
                        <thead>
                        <tr>
                            <th>NO.</th>
                            <th>NAME</th>
                            <th>D.G.</th>
                            <th>W. RANK</th>
                            <th>COUNTRY</th>
                        </tr>
                        </thead>

                        <tbody>
                        {qualifierPlayers.map((player) => (
                            <tr key={player.no}>
                                <td>{String(player.no).padStart(2, "0")}</td>
                                <td className="qualifier-player-name">
                                    {player.name}
                                </td>
                                <td>{player.grade}</td>
                                <td>{player.worldRank}</td>
                                <td>{player.country}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <p className="qualifier-players-note">
                    Player list and ranking information as of the update shown above.
                </p>
            </section>

            <section className="qualifier-players">
                <div className="qualifier-players-header">
                    <div>
                        <span className="eyebrow">GCWC EGYPT 2026</span>
                        <h2>
                            THE
                            <br />
                            <em>PLAYERS.</em>
                        </h2>
                    </div>

                    <div className="qualifier-players-meta">
                        <strong>{qualifierPlayers.length}</strong>
                        <span>REGISTERED PLAYERS</span>
                        <small>UPDATED 30 SEPTEMBER 2026 · 5:00 PM</small>
                    </div>
                </div>

                <div className="qualifier-players-table-wrap">
                    <table className="qualifier-players-table">
                        <thead>
                        <tr>
                            <th>NO.</th>
                            <th>NAME</th>
                            <th>D.G.</th>
                            <th>W. RANK</th>
                            <th>COUNTRY</th>
                        </tr>
                        </thead>

                        <tbody>
                        {qualifierPlayers.map((player) => (
                            <tr key={player.no}>
                                <td>{String(player.no).padStart(2, "0")}</td>
                                <td className="qualifier-player-name">
                                    {player.name}
                                </td>
                                <td>{player.grade}</td>
                                <td>{player.worldRank}</td>
                                <td>{player.country}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <p className="qualifier-players-note">
                    Player list and ranking information as of the update shown above.
                </p>
            </section>


        </main>
    );
}