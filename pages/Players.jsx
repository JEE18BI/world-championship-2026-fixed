import { useMemo, useState } from "react";
import PlayerCard from "../components/PlayerCard";
import { players } from "../data/players";

const countries = ["ALL", ...new Set(players.map(p => p.country))];

export default function Players() {
  const [country, setCountry] = useState("ALL");
  const filtered = useMemo(() => country === "ALL" ? players : players.filter(p => p.country === country), [country]);
  return <main className="page players-page">
    <div className="page-hero players-hero">
      <span className="eyebrow">05 / PLAYERS</span>
      <h1>THE<br/><em>PLAYERS</em></h1>
      <p>36 RANKING PLACES · 2026 WORLD CHAMPIONSHIP</p>
    </div>
    <section className="content-section ranking-section">
      <div className="section-heading"><div><span className="eyebrow">RANKING PLACES</span><h2>THE FIRST NAMES<br/><span>ON THE ROAD TO THE TITLE.</span></h2></div><p>Allocated ranking places based on the applicable WCF ranking criteria and designated allocation process.</p></div>
      <div className="filters">{countries.map(c => <button key={c} className={country === c ? "active" : ""} onClick={() => setCountry(c)}>{c}</button>)}</div>
      <div className="player-grid">
        {filtered.map(p => <PlayerCard key={p.rank} player={p} />)}
      </div>
    </section>
    <section className="content-section qualification-note">
      <span className="eyebrow">ABOUT RANKING PLACES</span>
      <h2>OFFICIAL<br/><em>ALLOCATION</em></h2>
      <p>Ranking-place information is presented for the 2026 championship. Final qualification rules, allocation dates and official regulations should be confirmed against the World Croquet Federation's published event information.</p>
    </section>
  </main>;
}
