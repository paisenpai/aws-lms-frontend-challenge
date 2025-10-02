import Link from "next/link"
import styles from "./signup.module.css"

export default function SignupPage() {
  return (
    <div className={styles.authPage}>
      <div className={styles.splitContainer}>
        {/* Left Column - Form */}
        <div className={styles.formColumn}>
          <div className={styles.formContent}>
            <Link href="/" className={styles.backLink}>
              ← Back to Home
            </Link>

            <div className={styles.formHeader}>
              <h1>Sign Up</h1>
              <p>Create your account to start your learning journey</p>
            </div>

            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="awsccId">AWSCC-ID</label>
                <input type="text" id="awsccId" placeholder="Enter your AWSCC-ID" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="your.email@example.com" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Create a strong password" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword">Re-enter Password</label>
                <input type="password" id="confirmPassword" placeholder="Confirm your password" required />
              </div>

              <button type="submit" className={styles.submitButton}>
                Sign Up
              </button>
            </form>

            <div className={styles.formFooter}>
              <p>
                Already have an account? <Link href="/login">Login!</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Illustration */}
        <div className={styles.illustrationColumn}>
          <div className={styles.illustrationContent}>
            <div className={styles.illustrationPlaceholder}>
              {/* Placeholder for mascot/illustration */}
              <div className={styles.mascotPlaceholder}>
                <span>✨</span>
              </div>
            </div>
            <h2>Your Journey Starts Here.</h2>
            <p>Join thousands of learners mastering cloud technologies and building the skills of tomorrow.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
