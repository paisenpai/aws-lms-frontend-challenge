import Link from "next/link"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaIllustration}>
            {/* Placeholder for character illustration */}
            👨‍💻
          </div>

          <div className={styles.ctaText}>
            <h2>Ready to build your skills?</h2>
            <p>Sign in or register using your AWSCC ID and start your journey.</p>

            <div className={styles.ctaButtons}>
              <Link href="/register">
                <button className={styles.registerButton}>Register</button>
              </Link>
              <Link href="/login">
                <button className={styles.loginButton}>Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <h3>Skill Builder Departments</h3>
            <p>Learn faster. Skill up smarter.</p>

            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                📘
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                🐦
              </a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                💼
              </a>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="#how-it-works">About SBD</Link>
              </li>
              <li>
                <Link href="#departments">Our Departments</Link>
              </li>
              <li>
                <Link href="#leaderboards">Leaderboards</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerLinks}>
            <h4>Account</h4>
            <ul>
              <li>
                <Link href="/register">Register</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>Copyright © 2025 AWS Cloud Clubs PUP. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
