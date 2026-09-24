import Image from "next/image";
import styles from "./ServicePlans.module.css";

interface Plan {
  name: string;
  badge: string;
  subtitle: string;
  features: string[];
}

const plans: Plan[] = [
  {
    name: "SILVER",
    badge: "/Images/LiftsServiceAndMaintenance/silver-package.webp",
    subtitle: "Non Comprehensive Maintenance Package",
    features: [
      "24x7 Emergency service",
      "180 minutes guaranteed Response time",
      "Lubrication & bi-monthly Preventive maintenance",
      "Replacement parts would be charged at actuals",
    ],
  },
  {
    name: "GOLD",
    badge: "/Images/LiftsServiceAndMaintenance/gold-package.webp",
    subtitle: "Semi-Comprehensive Maintenance Package",
    features: [
      "24x7 Emergency service",
      "180 minutes guaranteed Response time",
      "Lubrication & bi-monthly Preventive maintenance",
      "All parts would be covered under the gold care except – machine, rope, VVVF drive, Controller & Controller parts.",
    ],
  },
  {
    name: "PLATINUM",
    badge: "/Images/LiftsServiceAndMaintenance/platinum-package.webp",
    subtitle: "Full – Comprehensive maintenance package",
    features: [
      "24x7 Emergency service",
      "180 minutes guaranteed Response time",
      "Lubrication & bi-monthly Preventive maintenance",
      "All parts would be covered under the platinum care",
    ],
  },
];

export default function ServicePlans() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <h2 data-reveal="up">Reliability You Can Count On, Every Time</h2>

          <p data-reveal="up">
            At TEKNIX ELEVATORS, we view the completion of a sales contract
            as just the beginning of our commitment to our clients. Our
            mission is to unlock the full potential of our products,
            consistently delivering exceptional service and creating
            lasting value.
          </p>

          <p data-reveal="up">
            We are driven by the principle of excellence—always striving to
            complete tasks ahead of schedule while ensuring perfection in
            every aspect of our service. Our dedication to providing
            high-quality, reliable service guarantees the utmost
            satisfaction for our clients. What truly sets TEKNIX ELEVATORS
            apart is our focus on offering competitively priced spare
            parts, alongside comprehensive, proactive follow-up visits.
            This unwavering commitment to superior service and customer
            care is what distinguishes us from the competition.
          </p>
        </div>

        {/* PACKAGES */}
        <div className={styles.plans}>
          {plans.map((plan) => (
            <div className={styles.plan} key={plan.name} data-reveal="up">
              <div className={styles.badge}>
                <Image
                  src={plan.badge}
                  alt={`${plan.name} package`}
                  width={140}
                  height={140}
                  className={styles.badgeImage}
                />
              </div>

              <h3>{plan.subtitle}</h3>

              <ul className={styles.featureList}>
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}