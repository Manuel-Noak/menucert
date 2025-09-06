import React from "react";
import aiExecutive from "@/app/assets/aiExecutive.jpg";
import aiCloud from "@/app/assets/aiCloud.jpg";
import aiDevelopment from "@/app/assets/aiDevelopment.jpg";
import aiMarketing from "@/app/assets/aiMarketing.jpg";
import aiSales from "@/app/assets/aiSales.jpg";
import aiSecurity from "@/app/assets/aiSecurity.jpg";
import logo from "@/app/assets/Logo.png";
import Image from "next/image";
import styles from "./aiCert.module.css";
import Link from "next/link";

const images = [
  {
    src: aiExecutive,
    title: "AI+ Executive ",
  },
  {
    src: aiSales,
    title: "AI+ Sales ",
  },
  {
    src: aiSecurity,
    title: "AI+ Security ",
  },
  {
    src: aiCloud,
    title: "AI+ Cloud ",
  },
  {
    src: aiDevelopment,
    title: "AI+ Development ",
  },
  {
    src: aiMarketing,
    title: "AI+ Marketing",
  },
  {
    src: aiSales,
    title: "AI+ Project Manger",
  },
  {
    src: aiExecutive,
    title: "AI+ Ethical Hacking",
  },
  {
    src: aiCloud,
    title: "AI+ Prompt Engineering",
  },
];
export default function AiCertification() {
  return (
    <>
      <div className={styles.courses}>
        {images.map((image) => (
          <section className={styles.programs} key={image.title}>
            <Image src={image.src} alt={image.title} />
            <p>{image.title}</p>
            <button>See Program</button>
          </section>
        ))}
      </div>
      <footer className={styles.footer}>
        <Image src={logo} alt="logo" />

        <div className={styles.footerLinks}>
          <div className={styles.footerLinksInfo}>
            <h3>Useful Links</h3>
            <Link href={"/"}>Home</Link>
            <Link href={"/aiCertification"}>Certification</Link>
          </div>
          <div>
            <h3>Certification Policies</h3>
            <p>Certification Appeals Form</p>
            <p>Complaints Form</p>
            <p>Certification Application Form</p>
            <p>Compliance and Policies Center</p>
          </div>
        </div>

        <p className={styles.footerAlright}>
          All rights reserved-2025 Minu Cert Incorporated
        </p>
      </footer>
    </>
  );
}
