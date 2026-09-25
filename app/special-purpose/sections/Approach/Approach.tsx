import Image from "next/image";
import { approachSteps } from "../../content";
import styles from "./Approach.module.css";

export default function Approach() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label} data-reveal="up">
            THE TEKNIX APPROACH
          </span>

          <h2 data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>YOUR ENVIRONMENT</span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>DEFINES THE SOLUTION</span>
            </span>
          </h2>

          <p data-reveal="up">
            Every installation is approached around the specific
            environment and project requirements
          </p>

          <div className={styles.steps}>
            {approachSteps.map((step) => (
              <div className={styles.step} key={step.number} data-reveal="up">
                <span className={styles.stepNumber}>{step.number}</span>
                <div>
                  <h3>{step.label}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={styles.imageWrapper}
          data-reveal-image
          data-parallax="30"
        >
          <Image
            src="/Images/special-purpose/approach.png"
            alt="TekniX special purpose elevator"
            fill
            sizes="(max-width: 900px) 100vw, 480px"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}