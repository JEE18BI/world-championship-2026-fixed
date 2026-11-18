
export default function Championship() {
    const schedule = [
        { club: "Federation", day: "Friday 20/11", time: "10:00am – 3:00pm" },
        { club: "Gezira", day: "Thursday 19/11", time: "10:00am – 10:00pm" },
        { club: "Gezira", day: "Friday 20/11", time: "10:00am – 4:00pm" },
        { club: "Shooting", day: "Thursday 19/11", time: "6:00pm – 11:00pm" },
        { club: "Sherouk", day: "Friday 20/11", time: "9:00am – 3:00pm" },
        { club: "Zohour", day: "Friday 20/11", time: "10:00am – 3:00pm" },
        { club: "Nasr City", day: "Friday 20/11", time: "9:00am – 3:00pm" },
        { club: "Shams", day: "Friday 20/11", time: "9:00am – 3:00pm" },
        { club: "Zamalek", day: "Thursday 19/11", time: "10:00am – 10:00pm" },
        { club: "Zamalek", day: "Friday 20/11", time: "10:00am – 4:00pm" },
        { club: "Heliopolis", day: "Friday 20/11", time: "9:00am – 3:00pm" },
    ];

    return (
        <main className="page">
            <div className="page-hero">
                <span className="eyebrow">01 / CHAMPIONSHIP</span>
                <h1>
                    THE MAIN<br />
                    <em>EVENT</em>
                </h1>
                <p>NOVEMBER 21 — 29, 2026</p>
            </div>

            <section className="content-section">
                <h2>WORLD CHAMPIONSHIP 2026</h2>
                <p>
                    The world's best Golf Croquet players come together
                    for the 2026 World Championship. Find the key dates,
                    club schedules and event information below.
                </p>
            </section>

            <section className="content-section">
                <h2>OPENING CEREMONY</h2>
                <div className="ceremony-card">
                    <span className="eyebrow">OFFICIAL EVENT</span>
                    <h3>WELCOME TO THE WORLD CHAMPIONSHIP</h3>
                    <p>Friday, November 20, 2026 at Federation courts</p>
                    <p className="ceremony-time">6:00 PM</p>
                    <p>
                        Join us for the official opening ceremony as we
                        welcome players, officials and guests to the
                        World Championship 2026.
                    </p>
                </div>
            </section>

            <section className="content-section">
                <h2>CLUB SCHEDULE</h2>
                <p>
                    Club Practice schedules for Thursday, November 19 and
                    Friday, November 20, 2026.
                </p>

                <div className="schedule-wrapper">
                    <table className="schedule-table">
                        <thead>
                        <tr>
                            <th>Club</th>
                            <th>Day</th>
                            <th>Time</th>
                        </tr>
                        </thead>
                        <tbody>
                        {schedule.map((item, index) => {
                            const previous = schedule[index - 1];
                            const isNewClub =
                                !previous || previous.club !== item.club;

                            return (
                                <tr key={index}>
                                    {isNewClub && (
                                        <th
                                            scope="row"
                                            rowSpan={
                                                schedule.filter(
                                                    (s) => s.club === item.club
                                                ).length
                                            }
                                        >
                                            {item.club}
                                        </th>
                                    )}
                                    <td>{item.day}</td>
                                    <td>{item.time}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}
