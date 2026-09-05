"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Check, MapPin } from "lucide-react";
import { data } from "@/data/portfolio";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section id="experience" className={styles.section} aria-labelledby="experience-title">
      <div className={styles.inner}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <p className={styles.eyebrow}>Experience</p>
            <h2 id="experience-title">A record of systems shipped.</h2>
          </div>
          <p>My professional journey—the teams I worked with, the systems I shipped, and the operational impact created along the way.</p>
        </motion.header>

        <div className={styles.roles}>
          {data.experience.map((experience, index) => {
            const current = experience.endDate === "Present";
            return (
              <motion.article
                key={experience.company}
                className={`${styles.role} ${current ? styles.current : ""}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: Math.min(index * 0.06, 0.2) }}
              >
                <div className={styles.roleTop}>
                  <div className={styles.identity}>
                    <span className={styles.logo}>
                      {experience.logo ? (
                        <Image
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          width={62}
                          height={62}
                        />
                      ) : experience.company.slice(0, 2)}
                    </span>
                    <div>
                      <span className={styles.companyLine}>
                        <small>{String(index + 1).padStart(2, "0")}</small>
                        {experience.company}
                      </span>
                      <h3>{experience.role}</h3>
                    </div>
                  </div>

                  <div className={styles.roleMeta}>
                    <span className={styles.status}><i /> {current ? "Current role" : "Completed"}</span>
                    <span><Calendar size={13} /> {experience.startDate} — {experience.endDate}</span>
                    <span><MapPin size={13} /> {experience.location}</span>
                  </div>
                </div>

                <p className={styles.summary}>{experience.description}</p>

                <ul className={styles.achievements}>
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>
                      <span><Check size={12} aria-hidden="true" /></span>
                      <p>{achievement}</p>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
