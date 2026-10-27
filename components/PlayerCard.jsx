
export default function PlayerCard({ player }) {
    const fullName = player.name ||
        `${player.firstName} ${player.lastName}`;

    return (
        <article className="player-card">


            <div className="player-info">
                <h3>{fullName}</h3>

                <span>
          {player.country}
                    {player.countryName ? ` · ${player.countryName}` : ""}
        </span>

                {player.category && (
                    <span className="player-category">
            {player.category}
          </span>
                )}
            </div>
        </article>
    );
}
