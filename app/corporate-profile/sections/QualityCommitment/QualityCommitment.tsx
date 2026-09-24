import Image from "next/image";
import styles from "./QualityCommitment.module.css";

const paragraphs = [
  "At Teknix, we hold the unwavering belief that quality is the collective responsibility of all who are involved. This principle not only defines our quality policy but also shapes the enduring partnerships we cultivate with our stakeholders. Our vendor selection process is meticulous, ensuring that we choose not only those who supply the finest materials but also those who share our unwavering commitment to excellence in quality.",
  "Every stage of our production is carefully scrutinized to uphold the highest standards. Raw materials and components undergo rigorous inspection upon arrival, followed by random sample testing of intermediate products. Only once a product has passed a series of stringent tests is it deemed worthy of reaching our esteemed customers.",
  "We view certifications not just as accolades, but as integral pillars in our unwavering pursuit of perfection. As Confirmative European certified company, we adhere to the most demanding international standards. Beyond this, we continuously strive for further distinction, ensuring compliance with specialized benchmarks such as EN 81-71.",
  "Safety and quality are not merely goals but are embedded in the very essence of our products. Every elevator bearing the Teknix name is the result of an unrelenting focus on safety, performance, and elegance. However, we recognize that excellence is a journey without end. As such, our pursuit of continuous improvement in both safety and quality remains a cornerstone of our ethos, ensuring that we consistently exceed expectations and set new benchmarks in the industry.",
];

export default function QualityCommitment() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div
          className={styles.imageWrapper}
          data-reveal-image
          data-parallax="30"
        >
          <Image
            src="/Images/Home/elevator-1.png"
            alt="TekniX manufacturing"
            fill
            sizes="(max-width: 900px) 100vw, 420px"
            className={styles.image}
          />
        </div>

        <div className={styles.content} data-reveal="right">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}