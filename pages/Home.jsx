import { Link } from "react-router-dom";
import Countdown from "../components/Countdown";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="hero-content">
          <span className="eyebrow">WCF PRESENTS · 2026</span>
          <h1>GOLF CROQUET<br/><em>WORLD</em><br/>CHAMPIONSHIP</h1>
          <p className="hero-date">NOVEMBER 21 — 29, 2026</p>
          <Countdown />
          <div className="hero-actions">
            <Link className="button primary" to="/championship">EXPLORE CHAMPIONSHIP</Link>
            <Link className="button ghost" to="/qualifier">QUALIFIER · NOV 14 — 18</Link>
          </div>
        </div>
        <div className="hero-side">01<br/><span>THE ROAD<br/>TO THE TITLE</span></div>
      </section>

      <section className="intro section">
        <div className="section-label">01 / THE EVENT</div>
        <div>
          <h2>THE WORLD'S BEST<br/><span>COMPETE FOR THE TITLE.</span></h2>
          <p>Welcome to the 2026 Golf Croquet World Championship. Follow the road from qualification to the final, discover the venues, meet the ranked players and plan your stay.</p>
        </div>
      </section>

      <section className="feature-grid section">
        <Link to="/players" className="feature-card"><span>01</span><h3>RANKING<br/>PLACES</h3><p>Meet the first 36 players securing their places.</p><b>VIEW PLAYERS ↗</b></Link>
        <Link to="/qualifier" className="feature-card accent"><span>02</span><h3>THE<br/>QUALIFIER</h3><p>NOVEMBER 14 — 18, 2026</p><b>EXPLORE QUALIFIER ↗</b></Link>
        <Link to="/clubs" className="feature-card"><span>03</span><h3>CLUBS &<br/>VENUES</h3><p>Discover where championship play takes place.</p><b>VIEW CLUBS ↗</b></Link>
        <Link to="/hotels" className="feature-card"><span>04</span><h3>WHERE<br/>TO STAY</h3><p>Accommodation for players and visitors.</p><b>FIND A HOTEL ↗</b></Link>
      </section>
        <section className="home-open-section">

            <div className="home-open-top">
                <span className="eyebrow">02 / AFTER THE WORLDS</span>
                <span className="home-open-location">EGYPT · 2026</span>
            </div>

            <div className="home-open-main">

                <div>
                    <h2>
                        THE GAME
                        <br />
                        DOESN'T
                        <br />
                        <em>END HERE.</em>
                    </h2>
                </div>

                <div className="home-open-info">

                    <span className="eyebrow">NEXT EVENT</span>

                    <h3>
                        EGYPTIAN
                        <br />
                        OPEN
                    </h3>

                    <div className="home-open-date">
                        <strong>01 — 08</strong>
                        <span>DECEMBER 2026</span>
                    </div>

                    <div className="home-open-entry">
                        <span>ENTRY FEE</span>
                        <strong>$200 USD</strong>
                    </div>

                    <Link to="/egyptianopen">
                        EXPLORE THE EGYPTIAN OPEN
                        <span>↗</span>
                    </Link>

                </div>

            </div>

        </section>
    </main>
  );
}
