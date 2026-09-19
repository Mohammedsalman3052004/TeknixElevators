"use client";

import styles from "./StandardConfigurations.module.css";

const configurations = [
  {
    persons: "6",
    capacity: "408 KG",
    carWidth: "1160 MM",
    carDepth: "960 MM",
    hoistwayWidth: "1600 MM",
    hoistwayDepth: "1500 MM",
    doorWidth: "700 MM",
    doorHeight: "2000 MM",
  },
  {
    persons: "8",
    capacity: "544 KG",
    carWidth: "1300 MM",
    carDepth: "1100 MM",
    hoistwayWidth: "1800 MM",
    hoistwayDepth: "1600 MM",
    doorWidth: "800 MM",
    doorHeight: "2000 MM",
  },
  {
    persons: "10",
    capacity: "680 KG",
    carWidth: "1350 MM",
    carDepth: "1300 MM",
    hoistwayWidth: "1800 MM",
    hoistwayDepth: "1900 MM",
    doorWidth: "800 MM",
    doorHeight: "2000 MM",
  },
  {
    persons: "13",
    capacity: "884 KG",
    carWidth: "1400 MM",
    carDepth: "1600 MM",
    hoistwayWidth: "2100 MM",
    hoistwayDepth: "2000 MM",
    doorWidth: "900 MM",
    doorHeight: "2000 MM",
  },
  {
    persons: "15",
    capacity: "1020 KG",
    carWidth: "1000 MM",
    carDepth: "2400 MM",
    hoistwayWidth: "1800 MM",
    hoistwayDepth: "3000 MM",
    doorWidth: "1000 MM",
    doorHeight: "2000 MM",
  },
];

export default function StandardConfigurations() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* =========================================
            HEADING
        ========================================= */}

        <div
          className={styles.heading}
          data-reveal="up"
        >
          <h2>STANDARD CONFIGURATIONS</h2>
        </div>


        {/* =========================================
            TABLE
        ========================================= */}

        <div
          className={styles.tableWrapper}
          data-reveal="up"
        >
          <table className={styles.table}>

            <thead>
              <tr>
                <th>PERSONS</th>
                <th>CAPACITY</th>
                <th>CAR WIDTH</th>
                <th>CAR DEPTH</th>
                <th>HOISTWAY WIDTH</th>
                <th>HOISTWAY DEPTH</th>
                <th>DOOR WIDTH</th>
                <th>DOOR HEIGHT</th>
              </tr>
            </thead>

            <tbody>
              {configurations.map((row, index) => (
                <tr key={index}>
                  <td>{row.persons}</td>
                  <td>{row.capacity}</td>
                  <td>{row.carWidth}</td>
                  <td>{row.carDepth}</td>
                  <td>{row.hoistwayWidth}</td>
                  <td>{row.hoistwayDepth}</td>
                  <td>{row.doorWidth}</td>
                  <td>{row.doorHeight}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>


        {/* =========================================
            NOTE
        ========================================= */}

        <p
          className={styles.note}
          data-reveal="up"
        >
          The specifications shown are standard reference configurations.
          Final dimensions and requirements may vary depending on the
          selected configuration and project requirements.
        </p>

      </div>
    </section>
  );
}