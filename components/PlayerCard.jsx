export default function PlayerCard({ player }) {
  return (
    <article className="player-card">
      <div className="rank">{String(player.rank).padStart(2, "0")}</div>
      <div className="player-info">
        <h3>{player.name}</h3>
        <span>{player.country} · {player.countryName}</span>
      </div>
      <div className="maxdg">
        <small>MAXDG</small>
        <strong>{player.maxDG}</strong>
      </div>
    </article>
  );
}
