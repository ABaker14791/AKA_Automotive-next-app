import React from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import styles from "./MobileNav.module.css";

const MobileNav = ({ isOpen, toggle }: any) => {
  return (
    <div className={isOpen ? styles.containerOpen : styles.container}>
      <div onClick={toggle} className={styles.icon}>
        <FaTimes />
      </div>
      <div className={styles.linksWrapper}>
        <ul className={styles.links}>
          <li>
            <Link href="/">
              <a className={styles.link} onClick={toggle}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/newbikes">
              <a className={styles.link} onClick={toggle}>
                New Bikes
              </a>
            </Link>
          </li>
          <li>
            <Link href="/usedbikes">
              <a className={styles.link} onClick={toggle}>
                Used Bikes
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={styles.link} onClick={toggle}>
                About Us
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={styles.link} onClick={toggle}>
                Contact Us
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
