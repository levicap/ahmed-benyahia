"use client";

import { useState } from "react";
import Image from "next/image";
import { data } from "@/data/portfolio";
import styles from "./ClientMarquee.module.css";

function Client({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={styles.client}>
      <span className={styles.logo}>
        {failed ? <b className={styles.fallback}>{name.slice(0, 2).toUpperCase()}</b> : (
          <Image src={logo} alt={`${name} logo`} width={48} height={48} onError={() => setFailed(true)} />
        )}
      </span>
      <span>{name}</span>
    </div>
  );
}

export function ClientMarquee() {
  return (
    <section className={styles.section} aria-label="Clients">
      <div className={styles.shell}>
        <div className={styles.label}>
          <span><i /> Client network</span>
          <strong>Trusted by teams building real products</strong>
        </div>
        <div className={styles.network} role="list">
          {data.clients.map((client) => <Client key={client.name} {...client} />)}
        </div>
      </div>
    </section>
  );
}
