"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "./Navbar.module.css"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            {/* Placeholder for AWS Cloud Clubs logo */}
            <span>☁️</span>
          </div>
          <span>Skill Builder</span>
        </Link>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ""}`}>
          <button onClick={() => scrollToSection("hero")} className={styles.navLink}>
            Home
          </button>
          <button onClick={() => scrollToSection("how-it-works")} className={styles.navLink}>
            About
          </button>
          <button onClick={() => scrollToSection("leaderboards")} className={styles.navLink}>
            Leaderboards
          </button>
          <div className={styles.authButtons}>
            <Link href="/login" className={styles.loginButton}>
              Login
            </Link>
            <Link href="/signup" className={styles.signupButton}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
