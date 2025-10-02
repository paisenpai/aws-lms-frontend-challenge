import Link from "next/link"
import styles from "./login.module.css"

export default function LoginPage() {
  return (
    <div className={styles.authPage}>
      <div className={styles.splitContainer}>
        {/* Left Column - Illustration */}
        <div className={styles.illustrationColumn}>
          <div className={styles.illustrationContent}>
            <div className={styles.illustrationPlaceholder}>
              {/* Placeholder for mascot/illustration */}
              <div className={styles.mascotPlaceholder}>
                <span>🚀</span>
              </div>
            </div>
            <h2>Welcome Back!</h2>
            <p>Continue your journey to mastering cloud technologies and building amazing skills.</p>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className={styles.formColumn}>
          <div className={styles.formContent}>
            <Link href="/" className={styles.backLink}>
              ← Back to Home
            </Link>

            <div className={styles.formHeader}>
              <h1>Login</h1>
              <p>Enter your credentials to access your account</p>
            </div>

            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="awsccId">AWSCC-ID</label>
                <input type="text" id="awsccId" placeholder="Enter your AWSCC-ID" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" required />
              </div>

              <button type="submit" className={styles.submitButton}>
                Login
              </button>
            </form>

            <div className={styles.formFooter}>
              <p>
                Don't have an Account? <Link href="/signup">Sign up!</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
