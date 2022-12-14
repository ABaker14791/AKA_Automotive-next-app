import React from "react";
import styles from "./Navbar.module.css";
// Next imports
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// Images
import Logo from "../../public/logo/akaLogo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }: any) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={styles.nav}>
      <div className={styles.nav__logo}>
        <Link href="/">
          <a>
            <Image
              src={Logo}
              width="280px"
              height="160px"
              alt="AKA Automotive"
            />
          </a>
        </Link>
      </div>
      <div onClick={toggle} className={styles.nav__button}>
        <FaBars />
      </div>

      <div className={styles.nav__menu}>
        <Link href="/newbikes">
          <a
            className={
              currentRoute === "/newbikes"
                ? `${styles.nav__link} ${styles.active}`
                : `${styles.nav__link}`
            }
          >
            New Bikes
          </a>
        </Link>

        <Link href="/usedbikes">
          <a
            className={
              currentRoute === "/usedbikes"
                ? `${styles.nav__link} ${styles.active}`
                : `${styles.nav__link}`
            }
          >
            Used Bikes
          </a>
        </Link>

        <Link href="/heritage">
          <a
            className={
              currentRoute === "/heritage"
                ? `${styles.nav__link} ${styles.active}`
                : `${styles.nav__link}`
            }
          >
            Shop
          </a>
        </Link>

        <Link href="/about">
          <a
            className={
              currentRoute === "/about"
                ? `${styles.nav__link} ${styles.active}`
                : `${styles.nav__link}`
            }
          >
            About
          </a>
        </Link>

        <Link href="/contact">
          <a
            className={
              currentRoute === "/contact"
                ? `${styles.nav__link} ${styles.active}`
                : `${styles.nav__link}`
            }
          >
            Contact
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
