import { useMemo, useState } from "react";
import PlayerCard from "../components/PlayerCard";
import { players } from "../data/players";

const countries = ["ALL", ...new Set(players.map(p => p.country))];

const memberPlaces = [
    { rank: 1, player: "Alison Sharpe", country: "Australia", grade: "2236" },
    { rank: 2, player: "Gary Phipps", country: "Australia", grade: "2266" },
    { rank: 3, player: "Ian Burridge", country: "Wales", grade: "2181" },
    { rank: 4, player: "Paul Kaiser", country: "New Zealand", grade: "2218" },
    { rank: 5, player: "Michael Lauer", country: "New Zealand", grade: "2052" },
    { rank: 6, player: "Otkar Stankus", country: "Czech Moravia", grade: "2193" },
    { rank: 7, player: "Hans Johansson", country: "Sweden", grade: "1877" },
    { rank: 8, player: "Stefan Anour", country: "Sweden", grade: "2039" },
    { rank: 9, player: "Viggo Olsen", country: "Norway", grade: "1772" },
    { rank: 10, player: "Ian Sexton", country: "Switzerland", grade: "2139" },
    { rank: 11, player: "Juan Ojeda", country: "Spain", grade: "2325" },
    { rank: 12, player: "Eduardo Nunez", country: "Spain", grade: "2329" },
    { rank: 13, player: "Ivo Bozevnieks", country: "Latvia", grade: "2072" },
    { rank: 14, player: "Ulf Saewert", country: "Germany", grade: "2098" },
    { rank: 15, player: "Wolfgang Usbek", country: "Germany", grade: "2068" },
    { rank: 16, player: "David Houston", country: "Scotland", grade: "1606" },
    { rank: 17, player: "Sue Fraser", country: "Scotland", grade: "1603" },
    { rank: 18, player: "Milo Ruoff", country: "Hong Kong", grade: "**1262" },
    { rank: 19, player: "Pierre Bauldry", country: "Belgium", grade: "2019" },
    { rank: 20, player: "Sam Cuthbert", country: "England", grade: "2383" },
    { rank: 21, player: "Stuart M Smith", country: "England", grade: "2192" },
    { rank: 22, player: "Nour Aly", country: "Egypt", grade: "2313" },
    { rank: 23, player: "Pouline Salib", country: "Egypt", grade: "2328" },
    { rank: 24, player: "Adhaam Khaled Tharwat", country: "Egypt", grade: "2175" },
    { rank: 25, player: "Ahmed Elamary", country: "Egypt", grade: "2376" },
    { rank: 26, player: "Omar Elzainy", country: "Egypt", grade: "2309" },
    { rank: 27, player: "Ahmed Kamal", country: "Egypt", grade: "2237" },
    { rank: 28, player: "Basem Bahgat", country: "Egypt", grade: "2310" },
    { rank: 29, player: "Khaled Tharwat", country: "Egypt", grade: "2245" },
    { rank: 30, player: "Rusell Roux", country: "South Africa", grade: "1593" },
    { rank: 31, player: "Pedro Martins", country: "South Africa", grade: "1864" },
    { rank: 32, player: "Stephen Morgan", country: "America", grade: "2374" },
    { rank: 33, player: "Darin Guffey", country: "America", grade: "2338" },
    { rank: 34, player: "Brian Lozano", country: "Mexico", grade: "2384" },
    { rank: 35, player: "Hanan Rashad", country: "Canada", grade: "2263" },
    { rank: 36, player: "Amr Hamdy", country: "Canada", grade: "2114" },
    { rank: 37, player: "Mark Stephens", country: "Ireland", grade: "2283" },
    { rank: 38, player: "Robert O'Donoghue", country: "Ireland", grade: "2170" },
];

const wildCards = [
    {
        number: "01",
        firstName: "Alfred",
        lastName: "Makhubo",
        country: "South Africa",
    },
    {
        number: "02",
        firstName: "Mateo",
        lastName: "Palazon",
        country: "Spain",
    },
];

export default function Players() {
    const [country, setCountry] = useState("ALL");

    const filtered = useMemo(
        () =>
            country === "ALL"
                ? players
                : players.filter(p => p.country === country),
        [country]
    );

    return (
        <main className="page players-page">

            {/* =================================================
          HERO
      ================================================= */}

            <div className="page-hero players-hero">

        <span className="eyebrow">
          05 / PLAYERS
        </span>

                <h1>
                    THE
                    <br />
                    <em>PLAYERS</em>
                </h1>

                <p>
                    36 RANKING PLACES · 2026 WORLD CHAMPIONSHIP
                </p>

            </div>


            {/* =================================================
          RANKING PLACES
      ================================================= */}

            <section className="content-section ranking-section">

                <div className="section-heading">

                    <div>

            <span className="eyebrow">
              RANKING PLACES
            </span>

                        <h2>
                            THE FIRST NAMES
                            <br />
                            <span>ON THE ROAD TO THE TITLE.</span>
                        </h2>

                    </div>

                    <p>
                        Allocated ranking places based on the applicable WCF
                        ranking criteria and designated allocation process.
                    </p>

                </div>


                {/* COUNTRY FILTERS */}

                <div className="filters">

                    {countries.map(c => (

                        <button
                            key={c}
                            className={country === c ? "active" : ""}
                            onClick={() => setCountry(c)}
                        >
                            {c}
                        </button>

                    ))}

                </div>


                {/* PLAYER CARDS */}

                <div className="player-grid">

                    {filtered.map(p => (
                        <PlayerCard
                            key={p.rank}
                            player={p}
                        />
                    ))}

                </div>

            </section>


            {/* =================================================
          MEMBER PLACES
      ================================================= */}

            <section className="content-section member-places-section">

                <div className="section-heading member-places-heading">

                    <div>

            <span className="eyebrow">
              MEMBER PLACES
            </span>

                        <h2>
                            MEMBER
                            <br />
                            <span>PLACES.</span>
                        </h2>

                    </div>

                    <p>
                        The following players have qualified for the Golf Croquet
                        World Championship 2026 through their ranking and
                        membership places.
                    </p>

                </div>


                {/* MEMBER PLACES TABLE */}

                <div className="member-table-wrapper">

                    <table className="member-table">

                        <thead>

                        <tr>

                            <th>#</th>

                            <th>
                                PLAYER
                            </th>

                            <th>
                                COUNTRY
                            </th>

                            <th>
                                D GRADE
                                <span>
                    12/8/2026
                  </span>
                            </th>

                        </tr>

                        </thead>


                        <tbody>

                        {memberPlaces.map(p => (

                            <tr key={p.rank}>

                                <td>
                                    {p.rank}
                                </td>

                                <td>
                                    {p.player}
                                </td>

                                <td>
                                    {p.country}
                                </td>

                                <td>
                                    {p.grade}
                                </td>

                            </tr>

                        ))}

                        </tbody>

                    </table>

                </div>

            </section>


            {/* =================================================
          WILD CARDS
      ================================================= */}

            <section className="content-section wildcard-section">

                <div className="wildcard-header">

          <span className="eyebrow">
            WILD CARDS
          </span>

                    <h2>
                        WILD
                        <br />
                        <em>CARDS.</em>
                    </h2>

                    <p>
                        The wild cards for the 2026 Golf Croquet World
                        Championship have been awarded to the following players.
                    </p>

                </div>


                <div className="wildcard-grid">

                    {wildCards.map(player => (

                        <article
                            className="wildcard-card"
                            key={player.number}
                        >

                            <div className="wildcard-number">
                                {player.number}
                            </div>

                            <div className="wildcard-player">

                <span className="wildcard-label">
                  WILD CARD
                </span>

                                <h3>
                                    {player.firstName}
                                    <br />
                                    <em>{player.lastName}</em>
                                </h3>

                                <div className="wildcard-country">
                                    {player.country}
                                </div>

                            </div>

                        </article>

                    ))}

                </div>

            </section>


            {/* =================================================
          QUALIFICATION NOTE
      ================================================= */}

            <section className="content-section qualification-note">

        <span className="eyebrow">
          ABOUT RANKING PLACES
        </span>

                <h2>
                    OFFICIAL
                    <br />
                    <em>ALLOCATION</em>
                </h2>

                <p>
                    Ranking-place information is presented for the 2026
                    championship. Final qualification rules, allocation dates
                    and official regulations should be confirmed against the
                    World Croquet Federation's published event information.
                </p>

            </section>

        </main>
    );
}