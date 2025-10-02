import Link from "next/link"
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.mascot}>{/* Placeholder for mascot character */}🤖</div>

        <h1 className={styles.title}>
          Level Up Your Tech Skills with AWSCC PUP
          <br />
          Skill Builder Departments
        </h1>

        <p className={styles.subtitle}>
          Elevate your technical abilities through systematic skill building that tracks and rewards every milestone in
          your learning journey.
        </p>

        <Link href="/register">
          <button className={styles.ctaButton}>Start Now</button>
        </Link>
      </div>
    </section>
  )
}
