
import React from "react";

// MAIN QUALIFYING EVENT PLAYERS
const qualifierPlayers = [
    { no: 1, name: "Ahmed Eltaweel", grade: 2331, worldRank: 113, country: "Egypt" },
    { no: 2, name: "Kamal Ashraf", grade: 2277, worldRank: 159, country: "Egypt" },
    { no: 3, name: "Manal Khodeir", grade: 2218, worldRank: 245, country: "Egypt" },
    { no: 4, name: "Hossam Elatfy", grade: 2215, worldRank: 252, country: "Egypt" },
    { no: 5, name: "Sherif Eltarahony", grade: 2182, worldRank: 320, country: "Egypt" },
    { no: 6, name: "Mohamed Abuelnour", grade: 2171, worldRank: 342, country: "Egypt" },
    { no: 7, name: "Gabrielle Higgins", grade: 2168, worldRank: 348, country: "England" },
    { no: 8, name: "Youssef Elsweify", grade: 2166, worldRank: 353, country: "Egypt" },
    { no: 9, name: "Peter Payne", grade: 2139, worldRank: 429, country: "Switzerland" },
    { no: 10, name: "May Aly Maher", grade: 2134, worldRank: 442, country: "Egypt" },
    { no: 11, name: "Begona Elzaburu", grade: 2131, worldRank: 448, country: "Spain" },
    { no: 12, name: "Hazem Zaghloul", grade: 2126, worldRank: 461, country: "Egypt" },
    { no: 13, name: "Hossam Elsaaid", grade: 2125, worldRank: 463, country: "Egypt" },
    { no: 14, name: "Ahmed Alshurafa", grade: 2088, worldRank: 581, country: "Canada" },
    { no: 15, name: "Amr Elswify", grade: 2079, worldRank: 613, country: "Egypt" },
    { no: 16, name: "Tomass Freimanis", grade: 2016, worldRank: 872, country: "Latvia" },
    { no: 17, name: "Alfonso Ayuso", grade: 2005, worldRank: 938, country: "Spain" },
    { no: 18, name: "Samy Ahmed", grade: 1973, worldRank: 1186, country: "Egypt" },
    { no: 19, name: "Sherif Abuosbaa", grade: 1968, worldRank: 1226, country: "Egypt" },
    { no: 20, name: "Aly Ramadan", grade: 1957, worldRank: 1304, country: "Egypt" },
    { no: 21, name: "Aly Radwan", grade: 1948, worldRank: 1385, country: "Egypt" },
    { no: 22, name: "Abobakr Yousif", grade: 1930, worldRank: 1529, country: "Egypt" },
    { no: 23, name: "Salah Taher", grade: 1910, worldRank: 1694, country: "Egypt" },
    { no: 24, name: "Tarek Sahmoud", grade: 1809, worldRank: 2697, country: "Egypt" },
    { no: 25, name: "Richard Stokoe", grade: 1773, worldRank: 3207, country: "England" },
    { no: 26, name: "Manuel Marcos Fal", grade: 1653, worldRank: 4884, country: "Spain" },
    { no: 27, name: "Sarah Persons", grade: 1638, worldRank: 5094, country: "USA" },
    { no: 28, name: "Pilar Prado Latorre", grade: 1410, worldRank: 8891, country: "Spain" },
];

// REPLACEMENT PLAYERS — KEPT SEPARATE
const qualifierReplacements = [
    { no: 1, name: "Aly Abdelkader", grade: 2298, worldRank: 135, country: "Egypt" },
    { no: 2, name: "Merna Elsabarouty", grade: 2237, worldRank: 170, country: "Egypt" },
    { no: 3, name: "Charlie Von Schmieder", grade: 2194, worldRank: 294, country: "Ireland" },
    { no: 4, name: "Nagham Farouk", grade: 2150, worldRank: 396, country: "Egypt" },
    { no: 5, name: "Rana Elaalamy", grade: 1704, worldRank: 4098, country: "Palestine" },
    { no: 6, name: "Francisco Paradinas", grade: 1814, worldRank: 2651, country: "Spain" },
    { no: 7, name: "Mohamed Walid Hussin", grade: null, worldRank: null, country: "Egypt" },
];

// REUSABLE TABLE — EACH LIST IS RENDERED ONCE
function PlayerTable({ players }) {
    return (
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
                {players.map((player) => (
                    <tr key={player.no}>
                        <td>{String(player.no).padStart(2, "0")}</td>
                        <td className="qualifier-player-name">{player.name}</td>
                        <td>{player.grade ?? "—"}</td>
                        <td>{player.worldRank ?? "—"}</td>
                        <td>{player.country}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default function Qualifier() {
    return (
        <main className="page qualifier-page">

            {/* HERO */}
            <section className="page-hero qualifier-hero">
                <span className="eyebrow">02 / QUALIFIER</span>
                <h1>
                    THE ROAD
                    <br />
                    <em>BEGINS HERE.</em>
                </h1>
                <p>NOVEMBER 14 — 18, 2026</p>
            </section>

            {/* INTRO */}
            <section className="content-section qualifier-intro">
                <span className="eyebrow">GCWC 2026</span>
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

            {/* TOURNAMENT DETAILS */}
            <section className="qualifier-details">
                <div className="qualifier-details-header">
                    <span className="eyebrow">TOURNAMENT INFORMATION</span>
                    <h2>
                        THE
                        <br />
                        <em>DETAILS.</em>
                    </h2>
                </div>

                <div className="qualifier-info-grid">
                    <div className="qualifier-info-card">
                        <span>VENUES</span>
                        <strong>Alexandria Sporting Club<br />&amp; Smouha Club</strong>
                        <small>Alexandria, Egypt</small>
                    </div>

                    <div className="qualifier-info-card">
                        <span>DATES</span>
                        <strong>14 — 18<br />NOVEMBER 2026</strong>
                        <small>Saturday — Wednesday</small>
                    </div>

                    <div className="qualifier-info-card">
                        <span>QUALIFIER PLACES</span>
                        <strong>04</strong>
                        <small>Places into GCWC 2026</small>
                    </div>

                    <div className="qualifier-info-card">
                        <span>ENTRY CAPACITY</span>
                        <strong>40</strong>
                        <small>Competitors</small>
                    </div>

                    <div className="qualifier-info-card">
                        <span>ENTRY FEE</span>
                        <strong>£80</strong>
                        <small>Per entry</small>
                    </div>

                    <div className="qualifier-info-card">
                        <span>ALLOCATION DATE</span>
                        <strong>30 SEP<br />2026</strong>
                        <small>Qualifying Tournament Allocation</small>
                    </div>
                </div>
            </section>

            {/* MAIN PLAYERS — DISPLAYED ONCE */}
            <section className="qualifier-players">
                <div className="qualifier-players-header">
                    <div>
                        <span className="eyebrow">GCWC EGYPT 2026</span>
                        <h2>THE<br /><em>PLAYERS.</em></h2>
                    </div>
                    <div className="qualifier-players-meta">
                        <strong>{qualifierPlayers.length}</strong>
                        <span>LISTED PLAYERS</span>
                        <small>UPDATED 30 OCTOBER 2026</small>
                    </div>
                </div>

                <PlayerTable players={qualifierPlayers} />

                <p className="qualifier-players-note">
                    Player list and dynamic grades as supplied for
                    30 October 2026.
                </p>
            </section>

            {/* REPLACEMENTS — DISPLAYED ONCE */}
            <section className="qualifier-players qualifier-replacements">
                <div className="qualifier-players-header">
                    <div>
                        <span className="eyebrow">GCWC EGYPT 2026</span>
                        <h2>THE<br /><em>REPLACEMENTS.</em></h2>
                    </div>
                    <div className="qualifier-players-meta">
                        <strong>{qualifierReplacements.length}</strong>
                        <span>REPLACEMENT PLAYERS</span>
                    </div>
                </div>

                <PlayerTable players={qualifierReplacements} />

                <p className="qualifier-players-note">
                    Replacement players are listed separately from
                    the main qualifying event player list.
                </p>
            </section>

            {/* IMPORTANT DATES */}
            <section className="qualifier-dates">
                <div className="qualifier-dates-header">
                    <span className="eyebrow">IMPORTANT DATES</span>
                    <h2>MARK<br /><em>THE DATES.</em></h2>
                </div>

                <div className="date-row">
                    <div className="date-number">01</div>
                    <div className="date-info">
                        <span>ENTRY DATE</span>
                        <h3>ON OR BEFORE<br />30 SEPTEMBER 2026</h3>
                    </div>
                </div>

                <div className="date-row">
                    <div className="date-number">02</div>
                    <div className="date-info">
                        <span>CLOSING DATE</span>
                        <h3>30 OCTOBER 2026</h3>
                    </div>
                </div>

                <div className="date-row">
                    <div className="date-number">03</div>
                    <div className="date-info">
                        <span>QUALIFYING TOURNAMENT</span>
                        <h3>14 — 18 NOVEMBER 2026</h3>
                    </div>
                </div>
            </section>

            {/* REGISTRATION */}
            <section className="qualifier-registration">
                <div className="registration-header">
                    <span className="eyebrow">ENTRY REGISTRATION</span>
                    <h2>READY TO<br /><em>ENTER?</em></h2>
                    <p>
                        Entry registration is by email to the Egyptian
                        Croquet Federation, with a copy to the
                        Secretary-General.
                    </p>
                </div>

                <div className="registration-contact">
                    <span>ECF EMAIL</span>
                    <a href="mailto:m.raslan7961@gmail.com">
                        m.raslan7961@gmail.com <strong>↗</strong>
                    </a>
                </div>

                <div className="registration-instructions">
                    <div>
                        <span>01</span>
                        <p>Send your entry by email to the Egyptian Croquet Federation.</p>
                    </div>
                    <div>
                        <span>02</span>
                        <p>Copy the Secretary-General on the registration email.</p>
                    </div>
                    <div>
                        <span>03</span>
                        <p>Transfer the entry fee directly to the Egyptian Croquet Federation account.</p>
                    </div>
                    <div>
                        <span>04</span>
                        <p>
                            Email a copy of the bank transfer to the Egyptian
                            Croquet Federation, WCF Treasurer and Secretary-General.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHATSAPP CONTACT */}
            <section className="content-section qualifier-signup-section">
                <div className="qualifier-signup">
                    <h3>WANT TO SIGN UP<br />FOR THE QUALIFIERS?</h3>
                    <p>
                        Contact the organizing team for information
                        about the qualifying event.
                    </p>
                    <a
                        href="https://wa.me/201005252523"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CONTACT US ON WHATSAPP · +20 100 525 2523
                    </a>
                </div>
            </section>

        </main>
    );
}
