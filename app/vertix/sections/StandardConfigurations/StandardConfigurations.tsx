"use client";

import styles from "./StandardConfigurations.module.css";

const configurations = [
  {
    persons: "6",
    capacity: "408 kg",
    carWidth: "1160 mm",
    carDepth: "960 mm",
    hoistwayWidth: "1600 mm",
    hoistwayDepth: "1500 mm",
    doorWidth: "700 mm",
    doorHeight: "2000 mm",
  },
  {
    persons: "8",
    capacity: "544 kg",
    carWidth: "1300 mm",
    carDepth: "1100 mm",
    hoistwayWidth: "1800 mm",
    hoistwayDepth: "1600 mm",
    doorWidth: "800 mm",
    doorHeight: "2000 mm",
  },
  {
    persons: "10",
    capacity: "680 kg",
    carWidth: "1350 mm",
    carDepth: "1300 mm",
    hoistwayWidth: "1800 mm",
    hoistwayDepth: "1900 mm",
    doorWidth: "800 mm",
    doorHeight: "2000 mm",
  },
  {
    persons: "13",
    capacity: "884 kg",
    carWidth: "1400 mm",
    carDepth: "1600 mm",
    hoistwayWidth: "2100 mm",
    hoistwayDepth: "2000 mm",
    doorWidth: "900 mm",
    doorHeight: "2000 mm",
  },
  {
    persons: "15",
    capacity: "1020 kg",
    carWidth: "1600 mm",
    carDepth: "2400 mm",
    hoistwayWidth: "1800 mm",
    hoistwayDepth: "3000 mm",
    doorWidth: "1000 mm",
    doorHeight: "2000 mm",
  },
];

const columns = [
  {
    key: "persons",
    label: "PERSONS",
  },
  {
    key: "capacity",
    label: "CAPACITY",
  },
  {
    key: "carWidth",
    label: "CAR WIDTH",
  },
  {
    key: "carDepth",
    label: "CAR DEPTH",
  },
  {
    key: "hoistwayWidth",
    label: "HOISTWAY WIDTH",
  },
  {
    key: "hoistwayDepth",
    label: "HOISTWAY DEPTH",
  },
  {
    key: "doorWidth",
    label: "DOOR WIDTH",
  },
  {
    key: "doorHeight",
    label: "DOOR HEIGHT",
  },
] as const;

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
                {columns.map((column) => (
                  <th key={column.key}>
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {configurations.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((column) => (
                    <td key={column.key}>
                      {row[column.key]}
                    </td>
                  ))}
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
          Final dimensions and requirements may vary
          <br className={styles.desktopBreak} />
          depending on the selected configuration and project requirements.
        </p>

      </div>
    </section>
  );
}