import styles from "./Departments.module.css"

const departments = [
  {
    id: 1,
    icon: "🔒",
    title: "Security and Networking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    icon: "📊",
    title: "Data Technologies",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    icon: "☁️",
    title: "Cloud Computing and Infrastructure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    icon: "💻",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    icon: "🌐",
    title: "Internet of Things",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]

export default function Departments() {
  return (
    <section id="departments" className={styles.departments}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>
            Our <span>Departments</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

        <div className={styles.grid}>
          {departments.slice(0, 3).map((dept) => (
            <div key={dept.id} className={styles.card}>
              <div className={styles.cardIcon}>{dept.icon}</div>
              <h3>{dept.title}</h3>
              <p>{dept.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.gridBottom}>
          {departments.slice(3).map((dept) => (
            <div key={dept.id} className={styles.card}>
              <div className={styles.cardIcon}>{dept.icon}</div>
              <h3>{dept.title}</h3>
              <p>{dept.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
