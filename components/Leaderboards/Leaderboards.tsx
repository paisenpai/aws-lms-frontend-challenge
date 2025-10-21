import styles from "./Leaderboards.module.css"

const leaderboardData = [
  { rank: "4th", name: "Test Name 1", department: "Security and Networking", points: "100,000 pts", avatar: "👩" },
  { rank: "7th", name: "Test Name 2", department: "Data Analytics", points: "100,000 pts", avatar: "👨" },
  { rank: "5th", name: "Test Name 3", department: "Artificial Intelligence", points: "100,000 pts", avatar: "👩" },
  { rank: "8th", name: "Test Name 4", department: "Security and Networking", points: "100,000 pts", avatar: "👨" },
  { rank: "6th", name: "Test Name 5", department: "Security and Networking", points: "100,000 pts", avatar: "👩" },
  { rank: "9th", name: "Test Name 6", department: "Security and Networking", points: "100,000 pts", avatar: "👨" },
]

export default function Leaderboards() {
  return (
    <section id="leaderboards" className={styles.leaderboards}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Leaderboards</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

        {/* Solar system visualization */}
        <div className={styles.solarSystem}>
          <div className={`${styles.orbit} ${styles.orbit1}`}></div>
          <div className={`${styles.orbit} ${styles.orbit2}`}></div>
          <div className={`${styles.orbit} ${styles.orbit3}`}></div>

          <div className={styles.centerAvatar}>🥇</div>

          {/* Placeholder orbit avatars - positions will be adjusted with Figma assets */}
          <div className={styles.orbitAvatar} style={{ top: "10%", left: "50%", transform: "translateX(-50%)" }}>
            🥈
          </div>
          <div className={styles.orbitAvatar} style={{ bottom: "10%", left: "50%", transform: "translateX(-50%)" }}>
            🥉
          </div>
        </div>

        {/* Leaderboard list */}
        <div className={styles.leaderboardList}>
          {leaderboardData.map((item, index) => (
            <div key={index} className={styles.leaderboardItem}>
              <div className={styles.rank}>{item.rank}</div>
              <div className={styles.avatar}>{item.avatar}</div>
              <div className={styles.info}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.department}>{item.department}</div>
              </div>
              <div className={styles.points}>{item.points}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
