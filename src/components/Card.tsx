import React from "react";
import styles from "./card.module.css";

type CardProps = {
  venueName?: string; // เปลี่ยนชื่อ Prop ตามโจทย์
  imgSrc?: string;    // เปลี่ยนชื่อ Prop ตามโจทย์
  imageAlt?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
};

export function Card({
  venueName = "สถานที่จัดเลี้ยงคุณภาพ",
  imgSrc = "/images/banquet-room-1.jpg",
  imageAlt = "ภาพสถานที่จัดเลี้ยง",
  description = "บริการสถานที่จัดเลี้ยงพร้อมทีมงานดูแลครบวงจร เหมาะสำหรับงานแต่งงาน งานเลี้ยงสังสรรค์ และงานสัมมนา",
  ctaText = "ดูรายละเอียด",
  ctaHref = "#",
}: CardProps) {
  return (
    /* บังคับให้การ์ดแต่ละใบกว้างประมาณ 30% เพื่อให้วางเรียง 3 ใบใน 1 แถวได้พอดี */
    <article className={styles.card} aria-labelledby="card-title" style={{ width: "32%", display: "flex", flexDirection: "column" }}>
      
      {/* บังคับกรอบรูปให้สูง 200px และซ่อนส่วนเกิน */}
      <div className={styles.media} aria-hidden={false} style={{ width: "100%", height: "200px", overflow: "hidden" }}>
        <img
          src={imgSrc}
          alt={imageAlt}
          className={styles.image}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

      <div className={styles.body} style={{ flexGrow: 1, padding: "16px" }}>
        <h3 id="card-title" className={styles.title}>
          {venueName}
        </h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}

export default Card;