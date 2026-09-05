"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { data } from "@/data/portfolio";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  return (
    <section id="testimonials" className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.inner}>
        <motion.header className={styles.header} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div><p className={styles.eyebrow}>Client feedback</p><h2 id="testimonials-title">What working together actually feels like.</h2></div>
          <p>Feedback from clients who trusted me with production automation, AI, and software delivery.</p>
        </motion.header>
        <div className={styles.grid}>
          {data.testimonials.map((testimonial, index) => {
            const initials = testimonial.name.split(" ").map((part) => part[0]).join("").slice(0, 2);
            return (
              <motion.article key={testimonial.name + testimonial.project} className={styles.card} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: Math.min(index * .05, .25) }}>
                <div className={styles.meta}><div className={styles.stars} aria-label={`${testimonial.rating} out of 5 stars`}>{Array.from({ length: testimonial.rating }).map((_, star) => <i key={star} />)}</div><span>{testimonial.platform}</span></div>
                <blockquote className={styles.quote}>“{testimonial.review}”</blockquote>
                <footer className={styles.person}>
                  <span className={styles.avatar}>{testimonial.photo ? <Image src={testimonial.photo} alt="" width={38} height={38} /> : initials}</span>
                  <div><strong>{testimonial.name}</strong><small>{testimonial.project} · {testimonial.platform}</small></div>
                  <BadgeCheck className={styles.verified} size={16} aria-label="Verified client feedback" />
                </footer>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
